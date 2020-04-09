const Telegraf = require('telegraf'); // a class has been imported here, so the name starts with a caps, as per naming convention

//creating an instance of a bot using the *Telegraf* as a constructor
const bot = Telegraf(TELEGRAF_API_KEY); // api token within the () was provided by the BotFather