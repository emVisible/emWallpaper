import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'path'
const createTray = (createWindow: ()=>void) => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin' ? '../../resources/logo@2x.png' : '../../resources/logo.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置壁纸 ',
      click: () => {
        if (BrowserWindow.getAllWindows().length == 0) createWindow()
      }
    },
    {
      label: '退出',
      role: 'quit'
    }
  ])
  tray.setToolTip('EMW')
  tray.setContextMenu(contextMenu)
}

export { createTray }
