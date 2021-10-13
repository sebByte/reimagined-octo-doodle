//console.log("Hello Electron.js")

const { app, BrowserWindow, ipcMain } = require('electron'),
    path = require('path'),
    fetch = require('electron-fetch').default,
    createWindow = () => {
        const window = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            },
            autoHideMenuBar: true,
        });

        window.loadFile(path.join(__dirname, 'index.html'));
        window.webContents.openDevTools();
    };

app.on('ready', createWindow);

ipcMain.handle('get-btn-handler', async (event, data) => {
    //console.log("get-btn-handler received in main");

    try {
        const response = await fetch('https://frozen-headland-66513.herokuapp.com/cabins', {
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTU2YzA4YjAwZmRjNWQ3NGZiMGNkMmQiLCJlbWFpbCI6ImJhZEBkb2UuY29tIiwiaWF0IjoxNjM0MTA4NjYxLCJleHAiOjE2MzQ3MTM0NjF9.AUnITN1LLXHIDuTMIOK4h4vMu90Bv-YW25Bc0rnOPys' },
            timeout: 10000 //10 seconds cause 2 was too little :)
        });

        cabins = await response.json();
        return cabins

    } catch (error) {
        console.log(error.message);

        return error.message
    }
});

// https://www.electronjs.org/docs/latest/api/client-request