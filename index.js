const login = require("facebook-chat-api");
const key = require("./config/keys.js")

login({email: key.botmail.emailID , password: key.botmail.emailSecret}, (err, api) => {
    if(err) return console.error(err);

    setInterval( function(){ api.sendMessage( key.receiver.Msg, key.receiver.ID); }, 1000);
});



