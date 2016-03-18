import React from 'react';
import { Form, Row } from 'antd';
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

  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.props.form.getFieldsValue()); // 查看结果
    return (
      <Form horizontal>
        <FormItem label="列表数据">
          <Row>
            <PzDynamicList {...getFieldProps('list')} item={<PzDynamicItemExample />} />
          </Row>
        </FormItem>
      </Form>
    );
  }
}
App = Form.create()(App);

export default App;
