const { app, BrowserWindow, Menu, shell } = require("electron");
const fs = require("fs");
const path = require("path");

function findGameHtml() {
  const exact = path.join(__dirname, "simulator_16.html");
  if (fs.existsSync(exact)) return exact;
  const fallback = fs.readdirSync(__dirname).find((name) =>
    name.endsWith(".html") &&
    name.includes("simulator_16")
  );
  if (!fallback) throw new Error("Cannot find simulator_16.html");
  return path.join(__dirname, fallback);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1480,
    height: 960,
    minWidth: 1180,
    minHeight: 760,
    backgroundColor: "#0b0d10",
    autoHideMenuBar: true,
    title: "simulator_16",
    webPreferences: {
      contextIsolation: true,
      sandbox: false
    }
  });

  Menu.setApplicationMenu(null);
  win.loadFile(findGameHtml());

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
