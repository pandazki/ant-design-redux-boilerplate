import React from 'React';
import {
  Button,
  Row,
  Col
} from 'antd';

// 变长表单容器，传入组件必须在值发生改变时回调 onChange，并且接受一个叫 value 的 props，用于渲染组件。
class PzDynamicList extends React.Component {
  constructor() {
    super();
    this.state = { values: [] };
  }
  change(index, event) {
    let c;
    if (event && event.tartget) {
      c = event.target.value;
    } else {
      c = event;
    }
    const v = this.state.values;
    v[index].content = c;
    this.props.onChange(v); // 作为 form 的组件，必须调用该方法将变化的值告诉 form
    this.setState({
      values: [].concat(v)
    });
  }
  delete(index) {
    const v = this.state.values;
    v.splice(index, 1);
    this.props.onChange(v); // 作为 form 的组件，必须调用该方法将变化的值告诉 form
    this.setState({
      values: [].concat(v)
    });
  }
  click() {
    const v = this.state.values;
    this.setState({
      values: v.concat([{
        content: {}
      }])
    });
  }

  render() {
    const children = this.state.values.map((item, index) => {
      return (
        <Row key={index}>
          <Col span="22">
            {
              React.cloneElement(this.props.item, {
                onChange: this.change.bind(this, index),
                value: item.content
              })
            }
          </Col>
          <Col span="2">
            <Button onClick={this.delete.bind(this, index)}>-</Button>
          </Col>
        </Row>
      );
    });
    return (
      <div>
        <Button onClick={this.click.bind(this)}>+</Button>
        {children}
      </div>
    );
  }
}

export default PzDynamicList;
