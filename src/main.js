const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

/* basic ready function call syntax*/
app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    })
    
    mainWindow.on('closed', _ => {
        console.log("closed");
        mainWindow = null;
    });
});

