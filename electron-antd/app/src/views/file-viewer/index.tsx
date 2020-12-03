import { withStore } from '@/src/components'
import { Spin } from 'antd'
import * as React from 'react'
import FileCard from './FileCard'
import { getDocFiles } from './FileReader'

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
@withStore(['count', { countAlias: 'count' }])
export default class Demo extends React.Component<DemoState> {
  // state 初始化
  state: DemoState = {
    loading: false,
  }

  // 构造函数
  // constructor(props: IProps) {
  //   super(props)
  // }

  componentDidMount(): void {
    console.log(this)
  }

  public readDoc(): void {
    console.log('read...')
    getDocFiles()
  }

  render(): JSX.Element {
    const { loading } = this.state
    return (
      <div className="layout-padding">
        <FileCard readDoc={this.readDoc} />
        <Spin spinning={loading}>
          <div>file</div>
        </Spin>
      </div>
    )
  }
} // class Demo end
