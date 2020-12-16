import { Button } from 'antd'
import fs from 'fs'
import path from 'path'
import React, { ReactElement } from 'react'
import xml2js from 'xml2js'
import xmlBuilder from 'xmlbuilder'
interface Props {}

function FileToXml({}: Props): ReactElement {
  const pdfPath = 'C:/project-temp/examples/electron_demo/electron-antd/assets/docs/运维管理需求说明.pdf'
  const outPath: string = path.join(`${$tools.DOC_PATH}`, 'out')
  const pdf2Xml = () => {
    const dataBuffer: any = fs.readFileSync(pdfPath)
    const dataBufferBase64 = dataBuffer.toString('base64')
    console.log('readFileSync:', dataBuffer)

    // const xmlBuiler = () => import('xmlbuilder')
    // const xml = xmlBuiler
    //   .create('root')
    //   .ele('xmlbuilder')
    //   .ele('repo', { type: 'git' }, dataBuffer)
    //   .end({ pretty: true })
    const obj = {
      root: {
        xmlbuilder: {
          repo: {
            info: {
              time: Date.now(),
              company: 'xxx公司',
              phone: '13454444444',
            },
            file: {
              '@type': 'pdf', // attributes start with @
              buffer: dataBufferBase64, // text node
            },
          },
        },
      },
    }
    const xml = xmlBuilder.create(obj).end({ pretty: true })
    console.log('xml created')
    // 保存到本地
    const xmlName = 'pdf' + Date.now()
    fs.writeFile(`${outPath}/${xmlName}.xml`, xml, (err: any) => {
      console.log('xml:', xml)
      if (err) {
        console.log(err)
      }
      console.log('success')
    })
    // xml-to-pdf
    // const pdf = require('express-hogan-pdf')
    // pdf.toFile(xml, pdfPath, outPath, (err: any) => {
    //   console.log('转换出错：', err)
    // })
  }
  const readXml = (): void => {
    const parseString = xml2js.parseString
    const configString = fs.readFileSync(`${outPath}/pdf1608021982345.xml`, 'utf8')
    parseString(configString, function (err, result) {
      console.dir(result)
      const bufferBase64 = result.root.xmlbuilder[0].repo[0].file[0].buffer[0]
      const buffer = Buffer.from(bufferBase64, 'base64')
      const timeStemp = Date.now()
      const res: any = fs.writeFileSync(`${outPath}/write_${timeStemp}.pdf`, buffer, {})
      // win 打开文件夹目录
      const exec = require('child_process').exec
      exec(`explorer.exe /select,${outPath}`)
    })
  }
  return (
    <div>
      <Button onClick={pdf2Xml}>转XML</Button>
      <Button onClick={readXml}>读取XML</Button>
    </div>
  )
}

export default FileToXml
