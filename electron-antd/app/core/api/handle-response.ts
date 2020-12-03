import { BrowserWindow, Notification } from 'electron'
/**
 * 发生接口发生错误时的处理
 * 注意这是运行在主进程中的方法,请不要使用 document api
 * @param err
 * @param sendData
 * @param options
 */
interface IError {
  code: any
  message: string
}
interface ISendData {
  [propName: string]: any
}
export async function errorAction(err: IError, sendData: ISendData, options: RequestOptions): Promise<void> {
  const { code, message } = err
  const { errorType } = options

  $tools.log.error(`[request:${code}] [${errorType}]`, err)

  switch (code) {
    // 跳转到未登录页
    case 30000:
      // ...
      break

    // 无权限跳转
    case 30002:
      // ...
      break

    default:
      const title = `Request Error: [${code}]`
      if (errorType === 'notification') {
        const n = new Notification({
          icon: $tools.APP_ICON,
          title,
          body: message,
        })
        n.show()
      } else {
        await $tools.createWindow('AlertModal', {
          windowOptions: { modal: true, parent: BrowserWindow.getFocusedWindow() || undefined, title },
          query: {
            type: 'error',
            title,
            message,
          },
        })
      }
      break
  }
}
