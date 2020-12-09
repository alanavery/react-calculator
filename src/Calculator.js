import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operator: '+',
      answer: ''
    };
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value });
  };

  setOperator = (e) => {
    this.setState({ operator: e.target.value });
  };

  calculate = () => {
    const num1 = parseInt(this.state.num1);
    const num2 = parseInt(this.state.num2);
    if (this.state.operator === '+') {
      this.setState({ answer: num1 + num2 });
    } else if (this.state.operator === '-') {
      this.setState({ answer: num1 - num2 });
    } else if (this.state.operator === 'x') {
      this.setState({ answer: num1 * num2 });
    } else if (this.state.operator === '/') {
      this.setState({ answer: num1 / num2 });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={(e) => this.setNum(e, 'num1')}
          />
          <select name="operator" onChange={this.setOperator}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={(e) => this.setNum(e, 'num2')}
          />
          <button onClick={this.calculate}>=</button>
          <h3>{this.state.answer}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
