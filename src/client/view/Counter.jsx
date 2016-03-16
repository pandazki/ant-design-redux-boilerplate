import React from 'react';
import { Button } from 'antd';

const contentStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: '50%',
  transform: 'translate(0, -50%)'
};

const numberStyle = {
  padding: '0 0 100px',
  textAlign: 'center',
  fontSize: '150px'
};

const buttonBoxStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const buttonStyle = {
  width: '100px',
  height: '100px',
  fontSize: '60px'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  addOne() {
    this.setState({
      value: this.state.value + 1
    });
  }
  reduceOne() {
    this.setState({
      value: this.state.value - 1
    });
  }
  render() {
    return (
      <div style={contentStyle}>
        <p style={numberStyle}>{this.state.value}</p>
        <div style={buttonBoxStyle}>
          <Button style={buttonStyle} type="primary" onClick={this.addOne.bind(this)}>+</Button>
          <Button style={buttonStyle} type="primary" onClick={this.reduceOne.bind(this)}>-</Button>
        </div>
      </div>
    );
  }
}

export default App;
