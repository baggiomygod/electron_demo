import fs from 'fs'
import officegen from 'officegen'
import path from 'path'
export const getDocFiles = (): any => {
  let files: any
  try {
    files = fs.readdirSync($tools.DOC_PATH, {
      encoding: 'utf-8',
    })
  } catch (error) {
    $tools.log.error('Failed to read doc.', error)
    return []
  }
  const res: any[] = []

  files.forEach((file: any) => {
    res.push(file)
  })
  return res
}

export const writeDocFile = (): Promise<any> => {
  console.log('write...')
  const docx = officegen('docx')

  // Officegen calling this function to report errors:
  docx.on('error', (err: any) => {
    console.log(err)
  })

  // Create a new paragraph:
  let pObj = docx.createP()

  pObj.addText('示例1')
  pObj.addText(' 文字颜色', { color: '000088' })
  pObj.addText(' xxxsssss', { color: '00ffff', back: '000088' })

  pObj = docx.createP()

  pObj.addText('示例2 ')
  pObj.addText('officegen 0.2.12', {
    back: '00ffff',
    shdType: 'pct12',
    shdColor: 'ff0000',
  }) // Use pattern in the background.
  pObj.addText(' 1234 ')
  pObj.addText('4567 ', { highlight: true }) // Highlight!
  pObj.addText('杭州!', { highlight: 'darkGreen' }) // Different highlight color.

  pObj = docx.createP()

  pObj.addText('添加事件 ')
  pObj.addText('链接', { link: 'https://github.com' })
  pObj.addText('!')

  pObj = docx.createP()

  pObj.addText('粗体 + 下划线', { bold: true, underline: true })

  pObj = docx.createP({ align: 'center' })

  pObj.addText('文字居中', {
    border: 'dotted',
    borderSize: 12,
    borderColor: '88CCFF',
  })

  pObj = docx.createP()
  pObj.options.align = 'right'

  pObj.addText('文字右对齐.')

  pObj = docx.createP()

  pObj.addText('1.文字换行11111111,')
  pObj.addLineBreak()
  pObj.addText('2.文字换行22222')

  docx.putPageBreak()

  pObj = docx.createP()

  pObj.addText('Fonts face only.', { font_face: 'Arial' })
  pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })

  docx.putPageBreak()

  pObj = docx.createP()

  // We can even add images:
  pObj.addImage($tools.APP_ICON)

  // Let's generate the Word document into a file:

  const out = fs.createWriteStream(`${$tools.DOC_PATH}/officeGen_${Date.now()}.docx`)

  return new Promise((resolve: any, reject: any) => {
    // Officegen calling this function after finishing to generate the docx document:
    docx.on('finalize', (written: any) => {
      console.log('创建word文档完成.', written)
      resolve(written)
    })
    out.on('error', function (err) {
      console.log('error:', err)
      reject(err)
    })
    docx.generate(out)
  })
}

export const exportFile = async (): Promise<void> => {
  // fs.readFileSync(`${$tools.DOC_PATH}/测试1.doc`)

  const enterPath = path.join($tools.DOC_PATH, '/测试1.docx')
  const outputPath = path.join($tools.DOC_PATH, '/out/测试1.pdf')
  console.log('1:', enterPath)
  console.log('2:', outputPath)
  // docxConverter(enterPath, outputPath, (err: any, result: any) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log('result' + result)
  // })
}
export default {}
