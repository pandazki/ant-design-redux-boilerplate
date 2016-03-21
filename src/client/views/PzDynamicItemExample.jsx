import React from 'react';
import {
  Input,
  Row,
  Col,
  Form
} from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

// 可以在 DynamicList 中使用的组件示例
// 1.可以接受叫做 value 的 props，依赖其渲染UI。初始值是一个空对象，每个字段均需要处理。
// 2.值变化时回调 onChange，
class PzDynamicItemExample extends React.Component {
  change(key, event) {
    // 更变时候必须回调 onChange 发送完整的新数据
    const r = this.props.value;
    r[key] = event.target.value;
    // this.props.form.validateFieldsAndScroll((errors, values) => {
    //   if (!!errors) {
    //     console.log('Errors in form!!!');
    //     console.log(errors);
    //     return true;
    //   }
    //   console.log('Submit!!!');
    //   console.log(values);
    this.props.onChange(r);
    // });
  }

  // componentWillUpdate(nextProps, nextState) {
  //   this.props.form.validateFieldsAndScroll((errors, values) => {
  //     if (!!errors) {
  //       console.log('Errors in form!!!');
  //       console.log(errors);
  //       return true;
  //     }
  //     console.log('Submit!!!');
  //     console.log(values);
  //   });
  // }

  render() {
    const { getFieldProps } = this.props.form;

    const addressProp = getFieldProps(`value2_${this.props.index}`, {
      rules: [{ required: true, min: 5, message: '地址至少为 5 个字符' }]
    });
    const raw1 = addressProp.onChange;
    addressProp.onChange = (event) => {
      raw1(event);
      this.change.bind(this, 'value2')(event);
    };
    const nationalityProp = getFieldProps(`value1_${this.props.index}`, {
      rules: [{ required: true, min: 2, message: '国籍至少为 2 个字符' }]
    });
    const raw2 = nationalityProp.onChange;
    nationalityProp.onChange = (event) => {
      raw2(event);
      this.change.bind(this, 'value1')(event);
    };
    return (
      <Form form={this.props.form} >
        <Row>
          <Col span="8">
            <FormItem label="国籍" hasFeedback >
              <Input type="text" {...nationalityProp} value={this.props.value.value1} placeholder="国籍" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="16">
            <FormItem label="地址：" hasFeedback >
              <Input type="text" {...addressProp} value={this.props.value.value2} placeholder="地址" />
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
// PzDynamicItemExample = createForm()(PzDynamicItemExample);

export default PzDynamicItemExample;
