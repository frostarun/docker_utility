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

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });