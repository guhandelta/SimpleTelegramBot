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

// Context shortcuts are another way of using Telegram methods, where the *chatId* arg need not be mentioned
bot.command("shorcut", (ctx) => {
    // ctx.reply("text", [extra]); => with context shortcuts => reply() is the context shortcut
    ctx.reply("Hello World");
    // bot.telegram.sendMessage(chatId,"text", [extra]); => using Telegram methods
    bot.telegram.sendMessage(ctx.chat.id, "Hello World");
});

// Some middlewares have extra parameters property, some have values/properties as string or boolean
bot.command('extra', (ctx) => {

    // bot.telegram.sendMessage(chatId,"text", [extra]); => using Telegram methods
    bot.telegram.sendMessage(ctx.chat.id, "Hello World",
        {//Extra params is an obj, when passing multiple params, include them as attributes in the object 
            parse_mode: 'Markdown',
            disable_notification: true
        }
    );

    // bot.telegram.sendMessage(chatId,"text", [extra]); => using Telegram methods
    ctx.reply("Hello World",
        {//Extra params is an obj, when passing multiple params, include them as attributes in the object 
            parse_mode: 'Markdown',
            disable_notification: true
        }
    );
    // hears() => Registers middleware for handling text messages, and it's not a Telegram command
    // This method won't work in a group due to group privacy settings, disable it by ::> BotFather-> /mybots-(choose your bot)->Bot Settings->Group Privacy->Turn Off
    // hears() listens to the word/string/text only when it is entered alone and not when given with other text
    // "cat" works, but "hi cat" does not work
    bot.hears("cat", (ctx) => {
        ctx.reply("Meow");
    });

    //Registers middleware for provided update type => gives a response when a certain update type is entered 
    // bot.on("update_type", callback_fn());
    bot.on("sticker", (ctx) => {
        ctx.reply("Sticker Popup");
    });

    //handles user mentions like, @Guhaprasaanth => also works when the mention @Guhan is enclosed within a huge body of text
    bot.mention(["Guhan", "guhan"], (ctx) => {
        ctx.reply("The Admin")
    });

    //handles phone numbers
    bot.phone("+918870784275", (ctx) => {
        ctx.reply("Someone's Phone Number")
    });

    //handles hashtags eg. #hash
    bot.hashtag("hash", (ctx) => {
        ctx.reply("Some Hashtag");
    });

    // Registers a middleware => Takes in a middleware fn() and hadles all req from the user
    // Evertime the user interacts with the bot, it will be handled by the use()
    bot.use((ctx, next) => { //next => callback_fn() just like in ExpressJS. next() will call the next middleware, start() in this case
        // state allows us to pass data between middlewares > state is nothing but data stored
        ctx.state.date = 8;
        // ctx.reply("The bot was used");
        bot.telegram.sendMessage(ctx.chat.id, "The bot was used");
        next(ctx); //Passes the Telegram context obj to the 
        //next() will still do the same without the ctx passed in, but passing in ctx will allow the next middleware to handle the-
        //-data which had been changed in the current fn() where the next() was called
    });

    //cmd to launch Telegram bot to start pulling in updates
    bot.launch(); 