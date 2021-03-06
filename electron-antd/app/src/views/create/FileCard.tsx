import { Button, Card } from 'antd'
import * as React from 'react'

const FileCard = (): any => {
  // 读本地文件
  const readFile = () => {
    console.log('readFile')
  }
  // 写本地文件
  const writeFile = () => {
    console.log('writeFile')
  }
  return (
    <Card title="file Test" className="mb-16">
      <div className="mb-16">
        <Button type="primary" onClick={readFile}>
          read file
        </Button>
        <Button className="ml-16" type="primary" onClick={writeFile}>
          write file
        </Button>
      </div>
    </Card>
  )
}

export default FileCard
