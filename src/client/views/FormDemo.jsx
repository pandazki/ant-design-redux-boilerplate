import React from 'react';
import { Form, Row, Button } from 'antd';
const FormItem = Form.Item;
import PzDynamicList from './PzDynamicList.jsx';
import PzDynamicItemExample from './PzDynamicItemExample.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  checkData(rule, value, callback) {
    const form = this.props.form;
    const v = form.getFieldValue('list');

    const seen = new Map();
    const v2 = v.filter((a) => !seen.has(a.value1) && seen.set(a.value1, 1));
    console.log(v, v2);
    if (v2.length !== v.length) {
      callback('存在相同的国籍');
    } else {
      callback();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        // console.log(errors.list.errors[0]);
        return;
      }
      console.log('Submit!!!');
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    // console.log(this.props.form.getFieldsValue()); // 查看结果
    return (
      <Form horizontal>
        <FormItem label="列表数据">
          <Row>
            <PzDynamicList {...getFieldProps('list', {
              rules: [{
                validator: this.checkData.bind(this),
              }]
            })} item={<PzDynamicItemExample />} form={this.props.form} />
          </Row>
        </FormItem>
        <FormItem>
           <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
        </FormItem>
      </Form>
    );
  }
}
App = Form.create()(App);

export default App;
