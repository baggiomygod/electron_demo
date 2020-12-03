import { BrowserWindow, MenuItemConstructorOptions } from 'electron'

export const trayMenus: MenuItemConstructorOptions[] = [
  { label: 'Home', click: (): Promise<BrowserWindow> => $tools.createWindow('Home') },
  {
    label: 'Page Params',
    click: (): Promise<BrowserWindow> =>
      $tools.createWindow('PageParams', {
        params: { test: 'test-params' },
        query: { testObj: { aa: ['bb', 'cc'] } },
      }),
  },
  { label: 'Create', click: (): Promise<BrowserWindow> => $tools.createWindow('Create') },

  {
    label: 'Help',
    submenu: [
      { label: 'Log Viewer', click: (): Promise<BrowserWindow> => $tools.createWindow('LogViewer') },
      { type: 'separator' },
      { label: 'About', click: (): Promise<BrowserWindow> => $tools.createWindow('About') },
    ],
  },

  { type: 'separator' },

  { label: 'Quit', role: 'quit' },
]
