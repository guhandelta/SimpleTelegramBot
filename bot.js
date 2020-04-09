const Telegraf = require('telegraf'); // a class has been imported here, so the name starts with a caps, as per naming convention

//creating an instance of a bot using the *Telegraf* as a constructor
const bot = Telegraf(TELEGRAF_API_KEY); // api token within the () was provided by the BotFather

// start(ctx,next) => ctx -> context obj is the context for one Telegram update || next -(optional)-> fn(), like a callback
// A Telegraf Context encapsulates telegram update. Context is created per request and contains many props like edit message,....etc
// Any msg or sticker or media sent, will be sent as a req to this script || Request(Telegraf_Context(Data))
bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " has entered the start command and it is a " + ctx.updateSubTypes[0]);
    console.log("/n-------------------From--------------------------------/n");
    console.log(ctx.from);
    console.log("/n-------------------Chat--------------------------------/n");
    console.log(ctx.chat);
    console.log("/n-------------------Message-----------------------------/n");
    console.log(ctx.message);
    console.log("/n-------------------updateSubTypes----------------------/n");
    console.log(ctx.updateSubTypes);
});


bot.help((ctx) => {
    ctx.reply("bot's here to help you");
});


bot.settings((ctx) => {
    ctx.reply("How do you want to configure your bot?");
});

//cmd to launch Telegram bot to start pulling in updates
bot.launch(); 