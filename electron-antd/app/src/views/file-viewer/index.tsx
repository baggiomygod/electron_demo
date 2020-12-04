import { List, message, Spin } from 'antd'
import * as React from 'react'
import FileCard from './FileCard'
import { exportFile, getDocFiles, writeDocFile } from './FileReader'
const { useState, useEffect } = React

declare interface DemoState {
  loading: boolean
}

/**
 * DemoProps 是组件的 props 类型声明
 * DemoState 是组件的 state 类型声明
 * props 和 state 的默认值需要单独声明
 */
interface IProps {
  [propsName: string]: any
}
const FileViewer = (): any => {
  const [loading, setLoading] = useState(false)
  const [testDocs, setTestDocs] = useState<any[]>([])
  // 读本地文件
  const readDoc = (): void => {
    setLoading(true)
    const testDocs: any[] = getDocFiles()
    setTestDocs(testDocs)
    setLoading(false)
  }
  // write file
  const writeDoc = async (): Promise<any> => {
    try {
      const res: any = await writeDocFile()
      console.log('生成状态：', res)
      readDoc()
    } catch (err) {
      message.error('创建失败')
    }
  }
  const exportDoc = (): void => {
    console.log('导出')
    exportFile()
  }
  useEffect(() => {
    readDoc()
  }, [])
  return (
    <div className="layout-padding">
      <FileCard readDoc={readDoc} writeDoc={writeDoc} exportDoc={exportDoc} />
      <Spin spinning={loading}>
        {/* <div>{renderFiles(testDocs)}</div> */}
        <List
          bordered
          dataSource={testDocs}
          renderItem={(item: any, index: number) => (
            <List.Item>
              {index + 1}.{item}
            </List.Item>
          )}
        />
      </Spin>
    </div>
  )
}
export default FileViewer
