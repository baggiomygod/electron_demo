interface AnyObj {
  /* eslint-disable */
  [key: string]: any
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'none'
    BUILD_ENV?: 'mock' | 'dev' | 'prod'

    /** API 协议 */
    API_PROTOCOL: string
    /** API 域名 */
    API_HOST: string
    /** API 根路径 */
    API_BASE_PATH: string
  }
}

declare const nodeRequire: NodeRequire
// ok
declare module 'officegen'
declare module 'pdfjs-dist'
declare module 'pdfjs-dist/build/pdf.worker.entry'

// unused
declare module 'docx-pdf'
declare module 'libreoffice-convert-win'
declare module 'react-pdf'
declare module 'xml-to-pdf'
