const Telegraf = require('telegraf'); // a class has been imported here, so the name starts with a caps, as per naming convention

//creating an instance of a bot using the *Telegraf* as a constructor
const bot = Telegraf(TELEGRAF_API_KEY); // api token within the () was provided by the BotFather

// start(ctx,next) => ctx -> context obj is the context for one Telegram update || next -(optional)-> fn(), like a callback
// A Telegraf Context encapsulates telegram update. Context is created per request and contains many props like edit message,....etc
// Any msg or sticker or media sent, will be sent as a req to this script || Request(Telegraf_Context(Data))
bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " has entered the start command and it is a " + ctx.updateSubTypes[0]);
});


bot.help((ctx) => {
    ctx.reply("bot's here to help you");
});


bot.settings((ctx) => {
    ctx.reply("How do you want to configure your bot?");
});

// Custom Telegram bot commands are created using the `command()` || 2 params, 1) String or Array of Strings(case sensitive) 2. Callback fn()
// bot.command("test", (ctx) => { 
bot.command(["test", "Test", "tst"], (ctx) => {
    ctx.reply("Custom Command Works!!!!!");
});

//cmd to launch Telegram bot to start pulling in updates
bot.launch(); 