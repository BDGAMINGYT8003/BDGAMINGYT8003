const axios = require('axios');

// Define a maximum number of retries for the API request
const MAX_RETRIES = 3;

module.exports = {
    name: 'kitsune',
    description: 'Get a random SFW kitsune image',
    async execute(ctx) {
        let attempts = 0;
        const apiUrl = 'https://purrbot.site/api/img/sfw/kitsune/img'; // double-check case-sensitivity
        // Loop until the maximum number of retries is reached
        while (attempts < MAX_RETRIES) {
            try {
                attempts++;
                // Make a request to the Purrbot API to get a random SFW kitsune image
                const response = await axios.get(apiUrl);
                // Validate the response
                if (response.status === 200 && response.data?.link) {
                    const imgUrl = response.data.link;
                    // Send the image to the Telegram chat with a caption
                    await ctx.replyWithPhoto(imgUrl, {
                        caption: `🦊 Here's a beautiful kitsune image for you!\n\n[Click here if the image doesn't load properly](${imgUrl})`,
                        parse_mode: 'Markdown'
                    });
                    return; // Exit the function after a successful reply
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error(`Attempt ${attempts} - Error fetching kitsune image:`, error.message);
                // If it's the last attempt, inform the user
                if (attempts === MAX_RETRIES) {
                    await ctx.reply('*Oops!* I couldn\'t fetch a kitsune image at the moment. Please try again later.', {
                        parse_mode: 'Markdown'
                    });
                }
            }
        }
    }
};