const axios = require('axios');

// Define a maximum number of retries for the API request
const MAX_RETRIES = 3;

module.exports = {
    name: 'anal',
    description: 'Get a random NSFW anal GIF',
    async execute(ctx) {
        let attempts = 0;
        const apiUrl = 'https://purrbot.site/api/img/nsfw/anal/gif'; // double-check case-sensitivity
        // Loop until the maximum number of retries is reached
        while (attempts < MAX_RETRIES) {
            try {
                attempts++;
                // Make a request to the Purrbot API to get a random NSFW anal GIF
                const response = await axios.get(apiUrl);
                // Validate the response
                if (response.status === 200 && response.data?.link) {
                    const gifUrl = response.data.link;
                    // Send the GIF to the Telegram chat with a caption
                    await ctx.replyWithAnimation(gifUrl, {
                        caption: `🔞 Here's your NSFW anal GIF! Please view with caution! \n\n[Click here if the GIF doesn't load properly](${gifUrl})`,
                        parse_mode: 'Markdown'
                    });
                    return; // Exit the function after a successful reply
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error(`Attempt ${attempts} - Error fetching NSFW anal GIF:`, error.message);
                // If it's the last attempt, inform the user
                if (attempts === MAX_RETRIES) {
                    await ctx.reply('*Oops!* I couldn\'t fetch an NSFW GIF at the moment. Please try again later.', {
                        parse_mode: 'Markdown'
                    });
                }
            }
        }
    }
};