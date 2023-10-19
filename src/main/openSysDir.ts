import { BrowserWindow, dialog, ipcMain } from 'electron'
const getWin = (win: Electron.IpcMainEvent | Electron.IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(win.sender)
}

ipcMain.handle('openSystemDirectory', (event: Electron.IpcMainInvokeEvent) => {
  console.log('open dir')
  const win = getWin(event)!
  const res = dialog.showOpenDialog(win, { properties: ['openDirectory'] }).then((r) => r.filePaths)
  return res
})
