const {
  app, BrowserWindow, ipcMain, shell,
} = require('electron');

// Constants
const inDevelopmentMode = process.env.MODE === 'dev';

// Main window reference
let mainWindow = null;

/**
 * Create Window
 * @note Creates the applications 'main' window and loads the root file
 */
function createWindow() {
  // Configure our main window
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
  });
  // Display devleoper tools
  if (inDevelopmentMode) mainWindow.webContents.openDevTools();
  // Load primary UI
  mainWindow.loadURL(
    inDevelopmentMode
      ? 'http://localhost:9000'
      : `file://${__dirname}/build/index.html`,
  );
  // Handle 'closed' window event
  mainWindow.on('closed', () => {
    mainWindow = null;
    if (process.platform !== 'darwin') app.quit();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // MacOS keeps application active even if all windows closed
  if (process.platform !== 'darwin') app.quit();
});

/**
 * Application Active
 * @note MacOS will activate and application when it's returns from the background.
 * @note For example, when the user selects the icon in the dock or title bar.
 */
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});

/**
 * Open Link
 * @note Opens the specified link externally in the users default browser.
 */
ipcMain.on('link:open', (event, link) => {
  if (typeof link === 'string' && link.length > 0) shell.openExternal(link);
});
