const axios = require('axios');
const { Markup } = require('telegraf');

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

module.exports = {
    name: 'waifu',
    description: 'Fetch a random waifu image (SFW or NSFW)',
    
    async execute(ctx) {
        await ctx.reply(
            'Select your preferred waifu type:',
            Markup.inlineKeyboard([
                Markup.button.callback('Waifu (SFW)', 'waifu:sfw'),
                Markup.button.callback('Waifu (NSFW)', 'waifu:nsfw')
            ])
        );
    },

    actions: {
        sfw: async (ctx) => fetchWaifuImage(ctx, 'sfw'),
        nsfw: async (ctx) => fetchWaifuImage(ctx, 'nsfw')
    }
};

// Fetch Waifu Image Function with Retry Mechanism
async function fetchWaifuImage(ctx, type) {
    let attempts = 0;
    const url = `https://api.waifu.pics/${type}/waifu`;
    
    while (attempts < MAX_RETRIES) {
        try {
            attempts++;
            console.log(`Attempt ${attempts} - Fetching ${type.toUpperCase()} waifu image...`);

            const response = await axios.get(url);
            
            if (response.status === 200 && response.data?.url) {
                const imageUrl = response.data.url;

                await ctx.replyWithPhoto(imageUrl, {
                    caption: getCaption(type, imageUrl),
                    parse_mode: 'Markdown'
                });

                console.log(`Success - Sent ${type.toUpperCase()} waifu image to user.`);
                return; // Exit on success
            } else {
                throw new Error('Invalid response from the API');
            }

        } catch (error) {
            console.error(`Error on attempt ${attempts} fetching ${type.toUpperCase()} waifu image:`, error);

            if (attempts < MAX_RETRIES) {
                await ctx.reply(`⚠️ Attempt ${attempts} failed. Retrying...`);
                await delay(RETRY_DELAY_MS); // Wait before retrying
            } else {
                await ctx.reply(
                    `🚨 *Oops!* Unable to fetch a ${type.toUpperCase()} waifu image at the moment. Please try again later. 😔`,
                    { parse_mode: 'Markdown' }
                );
            }
        }
    }
}

// Utility function to generate image caption
function getCaption(type, imageUrl) {
    return type === 'sfw'
        ? `✨ Here's your waifu! Enjoy! 🐾\n\n[Click here if the image doesn't load properly](${imageUrl})`
        : `🔞 Here's your NSFW waifu! Please view responsibly.\n\n[Click here if the image doesn't load properly](${imageUrl})`;
}

// Delay function to wait between retries
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}