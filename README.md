# Minecraft Discord RPC Bot

A Discord Rich Presence bot that displays Minecraft activity status on your Discord profile with customizable information and buttons.

## Features

- 🎮 Custom Minecraft Rich Presence display
- ⏰ Optional timestamp display
- 🖼️ Custom images and text
- 🔗 Clickable buttons with custom URLs
- 🌐 Web server for uptime monitoring
- 🔄 Auto-refresh every 15 seconds

## Preview

The bot will display your Minecraft activity on Discord with:
- Game name and status
- Custom state and details
- Large and small images
- Two clickable buttons
- Playing timestamp

## Setup

### Prerequisites

- Node.js (v16 or higher)
- A Discord account
- Discord Developer Token

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/minecraft-discord-rpc.git
   cd minecraft-discord-rpc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the bot**
   
   Edit `config.js` and add your Discord token:
   ```javascript
   module.exports = {
     showTime: false, // Set to true to show timestamp
     token: "YOUR_DISCORD_TOKEN_HERE", // Your Discord token
     timeZone: "Asia/Bangkok", // Your timezone
     Name: "Minecraft",
     FirstButtonName: "Minecraft Official",
     FirstButtonUrl: "https://www.minecraft.net/",
     SecondButtonName: "Discord Server", 
     SecondButtonUrl: "https://discord.gg/minecraft",
     LargeImage: "YOUR_IMAGE_URL_HERE" // Discord CDN image URL
   };
   ```

### Getting Discord Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select existing one
3. Go to "Bot" section
4. Copy the bot token
5. **Important**: Keep your token private and never share it publicly

### Alternative: Environment Variables

Instead of editing `config.js`, you can set environment variables:

```bash
export TOKEN="your_discord_token_here"
```

Or create a `.env` file:
```
TOKEN=your_discord_token_here
```

## Usage

### Local Development

```bash
node index.js
```

### Deploy to Cloud Platforms

#### Heroku

1. Create a new Heroku app
2. Set environment variable:
   ```bash
   heroku config:set TOKEN=your_discord_token_here
   ```
3. Deploy:
   ```bash
   git push heroku main
   ```

#### Railway

1. Connect your GitHub repository to Railway
2. Set environment variable `TOKEN` in Railway dashboard
3. Deploy automatically

#### Replit

1. Import from GitHub
2. Set `TOKEN` in Secrets tab
3. Run the project

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `showTime` | Show timestamp in activity | `false` |
| `token` | Discord bot token | Required |
| `timeZone` | Timezone for timestamp | `"Asia/Bangkok"` |
| `Name` | Game name display | `"Minecraft"` |
| `FirstButtonName` | First button text | `"Minecraft Official"` |
| `FirstButtonUrl` | First button URL | `"https://www.minecraft.net/"` |
| `SecondButtonName` | Second button text | `"Discord Server"` |
| `SecondButtonUrl` | Second button URL | `"https://discord.gg/minecraft"` |
| `LargeImage` | Large image URL (Discord CDN) | Required |

## Uptime Monitoring

The bot includes a web server on port 3000 for uptime monitoring. You can:

1. Access `http://your-app-url.com` to see the status page
2. Use uptime monitoring services like UptimeRobot
3. Join the Discord server mentioned in the status page for automated uptime monitoring

## Troubleshooting

### Common Issues

1. **"Cannot read properties of null (reading 'setActivity')"**
   - Make sure your Discord token is valid
   - Check if the bot has proper permissions

2. **"No token provided"**
   - Add your Discord token to `config.js` or set `TOKEN` environment variable

3. **Bot not showing activity**
   - Ensure you're logged into the same Discord account
   - Check if Discord Rich Presence is enabled in Discord settings

### Debug Mode

Add error logging by checking the console output when running the bot.

## Security Notes

- Never commit your Discord token to GitHub
- Use environment variables for sensitive data
- Keep your token private and regenerate if compromised

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues:
1. Check the troubleshooting section
2. Create an issue on GitHub
3. Join our Discord server for support

## Disclaimer

This bot uses `discord.js-selfbot-v13` which is designed for self-bots. Use responsibly and in accordance with Discord's Terms of Service. 
