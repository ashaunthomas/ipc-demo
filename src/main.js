const electron = require('electron');
const countdown = require('./countdown');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
let mainWindow;

// basic ready function call syntax
app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });

    //load view reference
    mainWindow.loadURL(`file://${__dirname}/countdown.html`);
    
    mainWindow.on('closed', _ => {
        console.log("closed");
        mainWindow = null;
    });

});

ipc.on('countdown-start', _ => {
    console.log("message received!");
})

