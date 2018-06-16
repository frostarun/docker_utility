const {
    app,
    BrowserWindow
} = require('electron')
const electron = require('electron');
const url = require('url')
const path = require('path')

let win

function createWindow() {
    let screenSize = electron.screen.getPrimaryDisplay().size;
    win = new BrowserWindow({
        width: screenSize.width,
        height: screenSize.height
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)