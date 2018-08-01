const login = require("facebook-chat-api");
const key = require("./config/keys.js")

login({email: key.botmail.emailID , password: key.botmail.emailSecret}, (err, api) => {
    if(err) return console.error(err);

    var yourID = "100000303913840";
    var msg = "Hi!";

    //api.sendMessage(msg, yourID);
    setInterval( function(){ api.sendMessage(keys.receiver.ID, keys.receiver.Msg); }, 1000);
});



