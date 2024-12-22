module.exports = {
    name: 'start',
    description: 'Greet the user and provide an introduction to WaifuVerse',
    async execute(ctx) {
        const welcomeMessage = `
🌸 **WELCOME TO WAIFUVERSE!** 🌸

Hello, ${ctx.from.first_name || 'Waifu lover'}! 🎉

Step into the magical world of WaifuVerse, where you can explore a vast variety of anime-inspired images and GIFs. Whether you're looking for cute character pics, lively interaction GIFs, or even a little spice with NSFW content (18+ only), WaifuVerse has something for everyone!

**✨ WHAT YOU CAN DO ✨**
• Discover adorable waifus and your favorite anime characters
• Share fun interaction GIFs with friends
• Express your emotions with animated reactions
• Access NSFW content responsibly (in appropriate settings)

**🚀 GET STARTED**
Type **/help** to view all available commands and start your journey into the world of WaifuVerse.

Happy browsing! 😄
`;

        await ctx.replyWithMarkdown(welcomeMessage, {
            disable_web_page_preview: true
        });
    }
};