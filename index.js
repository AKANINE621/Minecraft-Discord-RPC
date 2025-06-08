const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});
require("dotenv").config();
const config = require("./config.js");

// Simplified validation - only check for essential fields
function validateConfig(config) {
  if (!config.token && !process.env.TOKEN) {
    console.error("No token provided! Please set your Discord token in config.js or as TOKEN environment variable.");
    process.exit(1);
  }
}

// Validate config before proceeding
validateConfig(config);

let showTime = config.showTime;

const startTimestamp = Date.now();

client.on("ready", async () => {
  var AsciiTable = require("ascii-table");
  var table = new AsciiTable();
  table.setBorder("❘", "─", "✾", "❀");
  table.setTitle(`Logged In As ${client.user.username}!`);
  table
    .addRow(`Node.js`, `${process.version}`)
    .addRow(
      `Memory`,
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(
        process.memoryUsage().rss /
        1024 /
        1024
      ).toFixed(2)} MB`
    );

  client.user.setStatus('dnd');

  setTimeout(() => {
    console.log(table.toString());
  }, 3000);

  // Move the setInterval inside the ready event to ensure client is ready
  setInterval(() => {
    // Double check that client and client.user are still available
    if (!client || !client.user) {
      console.log("Client or client.user is null, skipping activity update");
      return;
    }

    const newTime = showTime ? formatTime() : "";
    const timeZone = config.timeZone;
    const Spicy = newTime;

    const r = new Discord.RichPresence(client)
      .setApplicationId("356875570916753438")
      .setType("PLAYING")
      .setURL("https://www.minecraft.net/")
      .setName(config.Name + Spicy)
      .setStartTimestamp(startTimestamp)
      .setAssetsLargeImage(config.LargeImage)
      .setAssetsSmallText(config.SmallText || "Playing")
      .addButton(config.FirstButtonName, config.FirstButtonUrl)
      .addButton(config.SecondButtonName, config.SecondButtonUrl);

    try {
      client.user.setActivity(r);
    } catch (error) {
      console.error("Error setting activity:", error);
    }
  }, 15000);
});

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: config.timeZone,
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(date);
  const timeWithSeparator = time.replace(" ", " | ");
  return timeWithSeparator;
}
setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client didn't logged in.. Killing the process..")
    process.kill(1);
  } else {
    console.log("Client has successfully logged in!")
  }
}, 1 * 1000 * 20);

// Add error handling for login
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

const keepAlive = require("./server.js");
keepAlive();

client.login(config.token || process.env.TOKEN);
