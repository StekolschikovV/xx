// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Just place this code at the entry point of your application:
const updater = require('electron-simple-updater');
updater.init('https://raw.githubusercontent.com/megahertz/electron-simple-updater/master/example/updates.json');