import { Button, Card } from 'antd'
import * as React from 'react'
interface IProps {
  readDoc: () => void
  writeDoc: () => void
  exportDoc: () => void
}
const FileCard = (props: IProps): any => {
  const { readDoc, writeDoc, exportDoc } = props

  return (
    <Card title="file Test" className="mb-16">
      <div className="mb-16">
        <Button type="primary" onClick={readDoc}>
          刷新列表
        </Button>
        <Button className="ml-16" type="primary" onClick={writeDoc}>
          新增文件
        </Button>
        <Button className="ml-16" type="primary" onClick={exportDoc}>
          导出
        </Button>
      </div>
    </Card>
  )
}

export default FileCard
