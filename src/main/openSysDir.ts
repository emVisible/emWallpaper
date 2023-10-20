import { BrowserWindow, dialog, ipcMain } from 'electron'
const getWin = (win: Electron.IpcMainEvent | Electron.IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(win.sender)
}

ipcMain.handle('openSystemDirectory', async(event: Electron.IpcMainInvokeEvent) => {
  console.log('open dir')
  const win = getWin(event)!
  // const res = dialog.showOpenDialog(win, { properties: ['openDirectory'] }).then((r) => r.filePaths)
  const res = await dialog.showOpenDialog(win, { properties: ['openDirectory'] })
  if (res.canceled === false && res.filePaths) {
    return res.filePaths
  }else {
    return 
  }
})
