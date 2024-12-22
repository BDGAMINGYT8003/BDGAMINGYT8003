const axios = require('axios');

// Define a maximum number of retries for the API request
const MAX_RETRIES = 3;

module.exports = {
    name: 'cuddle',
    description: 'Get a random cuddle GIF',
    async execute(ctx) {
        let attempts = 0;
        const urls = [
            'https://api.waifu.pics/sfw/cuddle',
            'https://purrbot.site/api/img/sfw/cuddle/gif' // Added PurrBot's cuddle API
        ];

        // Loop until the maximum number of retries is reached
        while (attempts < MAX_RETRIES) {
            try {
                attempts++;
                
                // Randomly select a URL from the list
                const url = urls[Math.floor(Math.random() * urls.length)];
                const response = await axios.get(url);
                
                // Validate the response
                const gifUrl = response.data?.url || response.data?.link; // PurrBot uses 'link' instead of 'url'
                if (response.status === 200 && gifUrl) {
                    // Send the GIF to the Telegram chat with a vibrant caption
                    await ctx.replyWithAnimation(gifUrl, {
                        caption: `✨ Here's your cuddle! Enjoy! \n\n[Click here if the GIF doesn't load properly](${gifUrl})`,
                        parse_mode: 'Markdown'
                    });
                    return; // Exit the function after a successful reply
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error(`Attempt ${attempts} - Error fetching cuddle GIF:`, error);
                
                // If it's the last attempt, inform the user
                if (attempts === MAX_RETRIES) {
                    await ctx.reply('*Oops!* I couldn\'t fetch a cuddle GIF at the moment. Please try again later.', {
                        parse_mode: 'Markdown'
                    });
                }
            }
        }
    }
};