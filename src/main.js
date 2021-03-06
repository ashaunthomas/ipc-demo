const electron = require('electron');
const countdown = require('./countdown');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
let windows = [];

// basic ready function call syntax
app.on('ready', _ => {
    [1,2,3].forEach(_ => {
        let win = new BrowserWindow({
            height: 400,
            width: 400
        });

        //load view reference
        win.loadURL(`file://${__dirname}/countdown.html`);
        
        win.on('closed', _ => {
            console.log("closed");
            mainWindow = null;
        });

        windows.push(win);
    });
});

ipc.on('countdown-start', _ => {
    countdown(count => {
        windows.forEach(win => {
            win.webContents.send('countdown',count);
        });
    });
})

