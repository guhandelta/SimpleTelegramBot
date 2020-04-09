const Telegraf = require('telegraf'); // a class has been imported here, so the name starts with a caps, as per naming convention

//creating an instance of a bot using the *Telegraf* as a constructor
const bot = Telegraf(TELEGRAF_API_KEY); // api token within the () was provided by the BotFather

// start(ctx,next) => ctx -> context obj is the context for one Telegram update || next -(optional)-> fn(), like a callback
bot.start((ctx) => {
    ctx.reply("Hello from the bot");
});


bot.help((ctx) => {
    ctx.reply("bot's here to help you");
});


bot.settings((ctx) => {
    ctx.reply("How do you want to configure your bot?");
});

//cmd to launch Telegram bot to start pulling in updates
bot.launch(); 