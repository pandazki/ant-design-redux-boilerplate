import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { counter } from '../actions/';

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
    this.props.dispatch(counter.change(1));
  }
  reduceOne() {
    this.props.dispatch(counter.change(-1));
  }
  render() {
    return (
      <div style={contentStyle}>
        <p style={numberStyle}>{this.props.counter.get('value')}</p>
        <div style={buttonBoxStyle}>
          <Button style={buttonStyle} type="primary" onClick={this.addOne.bind(this)}>+</Button>
          <Button style={buttonStyle} type="primary" onClick={this.reduceOne.bind(this)}>-</Button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.counter)(App);
