const axios = require('axios');
const { Markup } = require('telegraf');

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

module.exports = {
    name: 'neko',
    description: 'Fetch a random neko (cat girl) image (SFW or NSFW)',

    async execute(ctx) {
        await ctx.reply(
            'Select your preferred neko type:',
            Markup.inlineKeyboard([
                Markup.button.callback('Neko (SFW)', 'neko:sfw'),
                Markup.button.callback('Neko (NSFW)', 'neko:nsfw')
            ])
        );
    },

    actions: {
        sfw: async (ctx) => fetchNekoImage(ctx, 'sfw'),
        nsfw: async (ctx) => fetchNekoImage(ctx, 'nsfw')
    }
};

// Fetch Neko Image Function with Retry Mechanism
async function fetchNekoImage(ctx, type) {
    let attempts = 0;
    const urls = type === 'sfw'
        ? ['https://api.waifu.pics/sfw/neko', 'https://purrbot.site/api/img/sfw/neko/img']
        : ['https://api.waifu.pics/nsfw/neko', 'https://purrbot.site/api/img/nsfw/neko/img']; // Added new API here

    while (attempts < MAX_RETRIES) {
        try {
            attempts++;
            console.log(`Attempt ${attempts} - Fetching ${type.toUpperCase()} neko image...`);

            // Randomly select an API URL from the list
            const url = urls[Math.floor(Math.random() * urls.length)];
            const response = await axios.get(url);

            if (response.status === 200 && response.data?.url) {
                const imageUrl = response.data.url;

                await ctx.replyWithPhoto(imageUrl, {
                    caption: getCaption(type, imageUrl),
                    parse_mode: 'Markdown'
                });

                console.log(`Success - Sent ${type.toUpperCase()} neko image to user.`);
                return; // Exit on success
            } else if (response.data?.link) {
                // For the PurrBot API, the image URL is in the 'link' property
                const imageUrl = response.data.link;

                await ctx.replyWithPhoto(imageUrl, {
                    caption: getCaption(type, imageUrl),
                    parse_mode: 'Markdown'
                });

                console.log(`Success - Sent ${type.toUpperCase()} neko image to user.`);
                return; // Exit on success
            } else {
                throw new Error('Invalid response from the API');
            }

        } catch (error) {
            console.error(`Error on attempt ${attempts} fetching ${type.toUpperCase()} neko image:`, error);

            if (attempts < MAX_RETRIES) {
                await ctx.reply(`⚠️ Attempt ${attempts} failed. Retrying...`);
                await delay(RETRY_DELAY_MS); // Wait before retrying
            } else {
                await ctx.reply(
                    `🚨 *Oops!* Unable to fetch a ${type.toUpperCase()} neko image at the moment. Please try again later. 😔`,
                    { parse_mode: 'Markdown' }
                );
            }
        }
    }
}

// Utility function to generate image caption
function getCaption(type, imageUrl) {
    return type === 'sfw'
        ? `✨ Here's your neko! Enjoy! 🐾\n\n[Click here if the image doesn't load properly](${imageUrl})`
        : `🔞 Here's your NSFW neko! Please view responsibly.\n\n[Click here if the image doesn't load properly](${imageUrl})`;
}

// Delay function to wait between retries
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}