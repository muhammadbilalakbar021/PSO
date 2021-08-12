//Make Node.js API calls in this file
const remote = require("electron").remote;
const { ipcRenderer } = require("electron");
document.getElementById("FulWindow").addEventListener("click", (e) => {
  ipcRenderer.send("FullScreen", "Hello from main window");
});
