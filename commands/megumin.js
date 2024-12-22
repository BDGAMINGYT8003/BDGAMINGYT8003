const axios = require('axios');

// Define a maximum number of retries for the API request
const MAX_RETRIES = 3;

module.exports = {
    name: 'megumin',
    description: 'Get a random megumin image',
    async execute(ctx) {
        let attempts = 0;
        // Loop until the maximum number of retries is reached
        while (attempts < MAX_RETRIES) {
            try {
                attempts++;
                // Make a request to the waifu.pics API to get a random megumin image
                const response = await axios.get('https://api.waifu.pics/sfw/megumin');
                // Validate the response
                if (response.status === 200 && response.data?.url) {
                    const imageUrl = response.data.url;
                    // Send the image to the Telegram chat with a vibrant caption
                    await ctx.replyWithPhoto(imageUrl, {
                        caption: `✨ Here's your megumin! Enjoy! \n\n[Click here if the image doesn't load properly](${imageUrl})`,
                        parse_mode: 'Markdown'
                    });
                    return; // Exit the function after a successful reply
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error(`Attempt ${attempts} - Error fetching megumin image:`, error);
                // If it's the last attempt, inform the user
                if (attempts === MAX_RETRIES) {
                    await ctx.reply(' *Oops!* I couldn\'t fetch a megumin image at the moment. Please try again later. ', {
                        parse_mode: 'Markdown'
                    });
                }
            }
        }
    }
};