import React from 'React';
import {
  Input,
  Row,
  Col
} from 'antd';

// 可以在 DynamicList 中使用的组件示例
// 1.可以接受叫做 value 的 props，依赖其渲染UI。初始值是一个空对象，每个字段均需要处理。
// 2.值变化时回调 onChange，
class PzDynamicItemExample extends React.Component {
  change(key, event) {
    // 更变时候必须回调 onChange 发送完整的新数据
    const r = this.props.value;
    r[key] = event.target.value;
    this.props.onChange(r);
  }

  render() {
    return (
      <Row>
        <Col span="8">
          <Input placeholder="国籍" value={this.props.value.value1 || ''} onChange={this.change.bind(this, 'value1')} />
        </Col>
        <Col span="16">
          <Input placeholder="地址" value={this.props.value.value2 || ''} onChange={this.change.bind(this, 'value2')} />
        </Col>
      </Row>
    );
  }
}

export default PzDynamicItemExample;
