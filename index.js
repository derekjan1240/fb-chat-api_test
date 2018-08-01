const login = require("facebook-chat-api");
const key = require("./config/keys.js")

login({email: key.botmail.emailID , password: key.botmail.emailSecret}, (err, api) => {
    if(err) return console.error(err);

//     var yourID = "";
//     var msg = "Hi!";

    //api.sendMessage(msg, yourID);
    setInterval( function(){ api.sendMessage(key.receiver.ID, key.receiver.Msg); }, 1000);
});



