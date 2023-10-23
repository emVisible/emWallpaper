import { ipcMain, shell } from 'electron'

ipcMain.on('openSaveDirectory', async(event: Electron.IpcMainInvokeEvent, path: string) => {
  console.log('path',path)
  shell.openPath(path)
})
