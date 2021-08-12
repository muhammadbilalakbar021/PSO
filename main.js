const { app, BrowserWindow, webContents, ipcMain } = require("electron");

const server = require("./app");

let mainWindow, externalLinkWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 1000,
    minHeight: 500,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  externalLinkWindow = new BrowserWindow({
    width: 600,
    height: 300,
    minWidth: 500,
    minHeight: 300,
    webPreferences: {
      contextIsolation: false,
      // nodeIntegration: true,
    },
    show: false,
    // frame: false,
  });

  mainWindow.loadURL("http://localhost:3000/login");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  // Web contents
  let wc = mainWindow.webContents;

  wc.on("new-window", function (e, url) {
    console.log((e.sender.browserWindowOptions.width = 500));
    e.sender.browserWindowOptions.width = 500;
    externalLinkWindow.loadURL(url);
    externalLinkWindow.show();
    // e.
    e.preventDefault();
    // require("electron").shell.openExternal(url);
  });

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

  // ipcCommunation
  ipcMain.on("FullScreen", (e, args) => {
    console.log("hello");
    mainWindow.maximize();
    // e.sender.send(
    //   "channel1-response",
    //   'Message received on "channel1". Thank you!'
    // );
  });
}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
