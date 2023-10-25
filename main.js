const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login(process.env.MTA4NTk5NTYwOTQ3NzA5OTU0MA.GysLaI.4L3olDGwvlAPN39z3y1zbIn223v_ZJtjjcAIgE)
