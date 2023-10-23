import { ipcMain } from 'electron'
import { getWin } from './utils'

ipcMain.on('fullScreen', (event: Electron.IpcMainInvokeEvent) => {
  const win = getWin(event)
  win?.setFullScreen(!win.fullScreen)
})
