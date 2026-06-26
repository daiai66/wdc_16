const packager = require("electron-packager");
const path = require("path");

const target = process.argv[2] || "win";
const isMac = target === "mac";
const arch = process.argv[3] || (isMac ? "arm64" : "x64");

async function run() {
  const options = {
    dir: __dirname,
    out: path.join(__dirname, "dist"),
    overwrite: true,
    asar: true,
    prune: true,
    name: "simulator_16",
    platform: isMac ? "darwin" : "win32",
    arch,
    executableName: "simulator_16",
    ignore: [
      /^\/dist$/,
      /^\/desktop-app$/,
      /^\/node_modules\/\.cache$/,
      /_1\.html$/,
      /backup.*\.html$/,
      /勒克莱尔模拟器.*\.html$/
    ],
    electronZipDir: process.env.ELECTRON_ZIP_DIR || undefined,
    download: {
      mirrorOptions: {
        mirror: "https://npmmirror.com/mirrors/electron/"
      }
    }
  };

  const appPaths = await packager(options);
  console.log("PACKED:");
  appPaths.forEach((appPath) => console.log(appPath));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
