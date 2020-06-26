import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,

  // imageUrl: 'http://picsum.photos/200',
  // };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: 'bold',
  //   };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({id: 1});
  // }

  render() {
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm'
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-secondary btn-sm m-2'
            disabled={this.props.counter.value === 0 ? 'disable' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm'
          >
            X
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>Zero</h5> : value;
  }
}

export default Counter;
