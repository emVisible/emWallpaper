import { dialog, ipcMain } from 'electron'
import { getWin } from './utils'


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
