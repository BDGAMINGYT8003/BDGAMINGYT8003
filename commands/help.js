module.exports = {
    name: 'help',
    description: 'Show detailed information about available commands',
    async execute(ctx) {
        const commandsHelp = `
✨ WAIFUVERSE COMMAND GUIDE ✨

WaifuVerse offers a diverse collection of anime-related images and GIFs, ranging from safe-for-work (SFW) to not-safe-for-work (NSFW) content.

🎭 CHARACTER COMMANDS
• [/waifu](command:/waifu) - Obtain a random waifu image
• [/neko](command:/neko) - Enjoy a random neko image
• [/kitsune](command:/kitsune) - Fetch a random kitsune image
• [/shinobu](command:/shinobu) - Retrieve a random Shinobu image
• [/megumin](command:/megumin) - Fetch a random Megumin image
• [/senko](command:/senko) - Fetch a random Senko image
• [/shiro](command:/shiro) - Get a random Shiro image
• [/holo](command:/holo) - Fetch a random Holo image

💝 INTERACTION GIFS
• [/hug](command:/hug) - Get a random hug GIF
• [/kiss](command:/kiss) - Receive a random kiss GIF
• [/pat](command:/pat) - Receive a random pat GIF
• [/cuddle](command:/cuddle) - Receive a random cuddle GIF
• [/slap](command:/slap) - Enjoy a random slap GIF
• [/bonk](command:/bonk) - Enjoy a random bonk GIF
• [/poke](command:/poke) - Get a random poke GIF
• [/lick](command:/lick) - Get a random lick GIF
• [/bite](command:/bite) - Receive a random bite GIF
• [/highfive](command:/highfive) - Receive a random highfive GIF
• [/handhold](command:/handhold) - Enjoy a random handhold GIF
• [/tickle](command:/tickle) - Get a random tickle GIF

😊 EMOTION GIFS
• [/blush](command:/blush) - Fetch a random blush GIF
• [/smile](command:/smile) - Receive a random smile GIF
• [/happy](command:/happy) - Get a random happy GIF
• [/cry](command:/cry) - Get a random cry GIF
• [/pout](command:/pout) - Enjoy a random pout GIF
• [/cringe](command:/cringe) - Fetch a random cringe GIF
• [/smug](command:/smug) - Fetch a random smug GIF

✨ SPECIAL GIFS
• [/dance](command:/dance) - Enjoy a random dance GIF
• [/wave](command:/wave) - Enjoy a random wave GIF
• [/wink](command:/wink) - Get a random wink GIF
• [/yeet](command:/yeet) - Receive a random yeet GIF
• [/kick](command:/kick) - Enjoy a random kick GIF
• [/nom](command:/nom) - Get a random nom GIF
• [/awoo](command:/awoo) - Get a random awoo GIF
• [/fluff](command:/fluff) - Get a random fluff GIF
• [/tail](command:/tail) - Enjoy a random tail GIF
• [/glomp](command:/glomp) - Receive a random glomp GIF
• [/comfy](command:/comfy) - Receive a random comfy GIF
• [/eevee](command:/eevee) - Fetch a random Eevee GIF
• [/solo](command:/solo) - Get a random solo GIF
• [/bully](command:/bully) - Get a random bully GIF

🔞 NSFW COMMANDS
• [/anal](command:/anal) - Get a NSFW anal GIF
• [/blowjob](command:/blowjob) - Receive a NSFW blowjob GIF
• [/cum](command:/cum) - Fetch a NSFW cum GIF
• [/fuck](command:/fuck) - Get a NSFW fuck GIF
• [/neko](command:/neko) - Fetch a NSFW neko image
• [/pussylick](command:/pussylick) - Get a NSFW pussylick GIF
• [/trap](command:/trap) - Retrieve a NSFW trap image
• [/waifu](command:/waifu) - Obtain a NSFW waifu image
• [/kill](command:/kill) - Receive a NSFW kill GIF

📌 HOW TO USE
1. Type or click any command from the list to see the content
2. WaifuVerse will fetch and present the relevant media
3. Use NSFW commands responsibly in appropriate channels

Need help? Join @WaifuVerse
`;

        await ctx.replyWithMarkdown(commandsHelp, {
            disable_web_page_preview: true
        });
    }
};