/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'path'
import * as PDFJS from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'
import * as React from 'react'
PDFJS.workerSrc = workerSrc

export default class PDFViewer extends React.Component {
  pageRenders: never[]
  pageRenderRef: React.RefObject<any>
  fileUrl: string
  constructor(props: any) {
    super(props)
    this.pageRenders = [] // 存放每页pdf形成的canvas
    this.pageRenderRef = React.createRef() // 渲染pdf的容器
    this.fileUrl = path.join(`${$tools.DOC_PATH}`, '/运维管理需求说明.pdf')
  }

  public componentDidMount() {
    this.init()
  }

  public init = async () => {
    console.time('pdf加载时间')
    const loadingTask = PDFJS.getDocument(this.fileUrl)
    loadingTask.promise.then((pdf: any) => {
      console.timeEnd('pdf加载时间')
      const { numPages } = pdf
      for (let _page = 1; _page <= numPages; _page++) {
        pdf.getPage(_page).then((page: any) => {
          const viewport = page.getViewport({ scale: 1 })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
            enableWebGL: true,
          }
          page.render(renderContext)
          this.pageRenderRef.current.appendChild(canvas)
        })
      }
    })
  }
  public handleSign = async () => {
    this.setState({ loading: true })
    try {
      const res: any = await $api.callCASign({
        file: this.fileUrl,
      })
      console.log(res)
    } catch (err) {
      console.log(JSON.stringify(err))
    }
    this.setState({ loading: false })
  }
  public render() {
    return (
      <div>
        <div className="btns-wrap">
          <h3>PDF预览</h3>
        </div>
        <div style={{ height: '500px' }} ref={this.pageRenderRef}>
          {this.pageRenders.length > 0 && this.pageRenders}
        </div>
      </div>
    )
  }
}
