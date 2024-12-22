# Anime GIF and Image Bot 🤖

A feature-rich Telegram bot providing a vast collection of anime GIFs and images through various commands. Built with Node.js and the Telegraf framework.

## 📋 Features

### 🎭 Character Commands
- `/waifu` - Obtain a random waifu image
- `/neko` - Enjoy a random neko image
- `/kitsune` - Fetch a random kitsune image
- `/shinobu` - Retrieve a random Shinobu image
- `/megumin` - Fetch a random Megumin image
- `/senko` - Fetch a random Senko image
- `/shiro` - Get a random Shiro image
- `/holo` - Fetch a random Holo image

### 💝 Interaction GIFs
- `/hug` - Get a random hug GIF
- `/kiss` - Receive a random kiss GIF
- `/pat` - Receive a random pat GIF
- `/cuddle` - Receive a random cuddle GIF
- `/slap` - Enjoy a random slap GIF
- `/bonk` - Enjoy a random bonk GIF
- `/poke` - Get a random poke GIF
- `/lick` - Get a random lick GIF
- `/bite` - Receive a random bite GIF
- `/highfive` - Receive a random highfive GIF
- `/handhold` - Enjoy a random handhold GIF
- `/tickle` - Get a random tickle GIF

### 😊 Emotion GIFs
- `/blush` - Fetch a random blush GIF
- `/smile` - Receive a random smile GIF
- `/happy` - Get a random happy GIF
- `/cry` - Get a random cry GIF
- `/pout` - Enjoy a random pout GIF
- `/cringe` - Fetch a random cringe GIF
- `/smug` - Fetch a random smug GIF

### ✨ Special GIFs
- `/dance` - Enjoy a random dance GIF
- `/wave` - Enjoy a random wave GIF
- `/wink` - Get a random wink GIF
- `/yeet` - Receive a random yeet GIF
- `/kick` - Enjoy a random kick GIF
- `/nom` - Get a random nom GIF
- `/awoo` - Get a random awoo GIF
- `/fluff` - Get a random fluff GIF
- `/tail` - Enjoy a random tail GIF
- `/glomp` - Receive a random glomp GIF
- `/comfy` - Receive a random comfy GIF
- `/eevee` - Fetch a random Eevee GIF
- `/solo` - Get a random solo GIF
- `/bully` - Get a random bully GIF
- `/kill` - Receive a kill GIF

### 🔞 NSFW Commands
- `/anal` - Get a NSFW anal GIF
- `/blowjob` - Receive a NSFW blowjob GIF
- `/cum` - Fetch a NSFW cum GIF
- `/fuck` - Get a NSFW fuck GIF
- `/neko` - Fetch a NSFW neko image
- `/pussylick` - Get a NSFW pussylick GIF
- `/trap` - Retrieve a NSFW trap image
- `/waifu` - Obtain a NSFW waifu image

### 🛠️ Utility Commands
- `/help` - Show detailed information about available commands
- `/start` - Get started with the bot

## 🚀 Setup on Replit

### Prerequisites
- A Replit account
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

### Installation Steps

1. Fork this project to your Replit account

2. Set up environment variables:
   - Click on "Secrets (Environment Variables)" in the Tools panel
   - Add the following secret:
     ```
     Key: TELEGRAM_BOT_TOKEN
     Value: your-telegram-bot-token
     ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure the run button:
   - Click on the "Configure the run button" text
   - Set "Run" command as: `node index.js`

5. Click the "Run" button to start the bot

## 📦 Dependencies

```json
{
  "dependencies": {
    "telegraf": "^4.x",
    "picocolors": "^1.0.0"
  }
}
```

## ⚠️ Troubleshooting

Common issues and solutions:

1. Bot not responding
   - Check if the bot is running
   - Verify the bot token
   - Check Replit console for errors

2. Commands not working
   - Ensure command files are properly formatted
   - Check command registration
   - Verify Telegram API access

3. Performance issues
   - Monitor error counts
   - Check rate limiting
   - Verify resource usage

## 🔒 Content Warning

This bot contains both SFW (Safe for Work) and NSFW (Not Safe for Work) commands. NSFW commands are clearly marked and should only be used in appropriate channels and by users of legal age.

---
Made with ❤️ by Moin Uddin