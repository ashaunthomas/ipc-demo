const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/* basic ready function call syntax*/
app.on('ready', _ => {
    new BrowserWindow({
        height: 400,
        width: 400
    })
});
