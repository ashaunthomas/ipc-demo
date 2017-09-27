const electron = require('electron');

const app = electron.app;

/* basic ready function call syntax*/
app.on('ready', _ => {
    console.log("ready");
});