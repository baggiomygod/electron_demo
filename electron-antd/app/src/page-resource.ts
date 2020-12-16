/**
 * 页面资源集合，请不要在主进程中引用
 */

// 设为 undefined 将不会创建路由，一般用于重定向页面
export const Home = undefined

export const Create = import('./views/create/index')
export const CreateBid = import('./views/create-bid/index')
export const CAPage = import('./views/ca-page/index')
export const FileToXml = import('./views/file-to-xml/index')
export const FileEncript = import('./views/file-encrypt/index')
export const PageParams = import('./views/create/page-params')
export const FilePage = import('./views/file-viewer/index')
export const LogViewer = import('./views/log-viewer/log-viewer')
export const About = import('./views/about/about')

export const NoMatch = import('./views/no-match/no-match')

// 同步引用，注意这不会出发 beforeRouter
export { default as AlertModal } from './views/modals/alert-modal'
