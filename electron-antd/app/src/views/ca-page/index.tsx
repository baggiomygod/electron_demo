/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'path'
import pdfjsLib from 'pdfjs-dist'
import * as React from 'react'

export default class PDFViewer extends React.Component {
  pageRenders: never[]
  pageRenderRef: React.RefObject<any>
  constructor(props: any) {
    super(props)
    this.pageRenders = [] // 存放每页pdf形成的canvas
    this.pageRenderRef = React.createRef() // 渲染pdf的容器
  }

  public componentDidMount() {
    this.init()
  }

  public init = async () => {
    console.time('pdf加载时间')
    const fileUrl = path.join(`${$tools.DOC_PATH}`, '/运维管理需求说明.pdf')

    const pdf = await pdfjsLib.getDocument(fileUrl)
    console.timeEnd('pdf加载时间')
    const {
      _pdfInfo: { numPages },
    } = pdf

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
  }

  public render() {
    return <div ref={this.pageRenderRef}>{this.pageRenders.length > 0 && this.pageRenders}</div>
  }
}
