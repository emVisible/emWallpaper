import { Menu, MenuItemConstructorOptions, dialog, ipcMain } from 'electron'
import { createWriteStream } from 'fs'
import path from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'

ipcMain.on('download', async (event, url: string, fileDefaultName: string, savePath: string) => {
  createMenu(url, fileDefaultName, savePath)
})

const downloadFile = async (url: string, path: string) => {
  const streamPipeline = promisify(pipeline)
  const res = await fetch(url)
  if (!res.ok) {
    dialog.showErrorBox('Error', '下载失败')
    throw new Error(`unexpected response ${res.statusText}`)
  }
  await streamPipeline(res.body as any, createWriteStream(path))
  return path
}

const createMenu = (url: string, fileDefaultName: string, savePath:string) => {
  const config = [
    {
      label: '下载',
      async click() {
        const res = await dialog.showSaveDialog({
          title: 'emWallpaper',
          message: 'emWallpaper',
          defaultPath: path.join(savePath, fileDefaultName || 'example.jpg'),
          properties: ['createDirectory']
        })
        if (!res.canceled && res.filePath) {
          downloadFile(url, res.filePath).then(() => {
            console.log('save successfully')
          })
        }
      }
    }
  ] as MenuItemConstructorOptions[]
  const menu = Menu.buildFromTemplate(config)
  menu.popup()
}
