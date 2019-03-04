/**
 *
 * StateAsynTest
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTimeout } from 'timers';

/**
 * setState
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17
 */
export class StateAsynTest extends React.PureComponent {
  state = {
    val: 0,
    clickVal: 0,
  }

  
  componentDidMount() {
    this.setState({ val: this.state.val + 1 }); // eslint-disable-line
    console.log('1=> ', this.state.val);

    this.setState({ val: this.state.val + 1 }); // eslint-disable-line
    console.log('2=> ', this.state.val);

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log('3=> ', this.state.val);

      this.setState({ val: this.state.val + 1 });
      console.log('4=> ', this.state.val);

    }, 0);
    this.btn.addEventListener('click', this.handleClick);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClick = () => {
    console.log('before click=> ', this.state.clickVal);
    this.setState({ clickVal: this.state.clickVal + 1 });
    console.log('after=> ', this.state.clickVal);
  }

  render() {
    return (
      <div>
        <h2>setState 什么时候是异步，什么时候是同步</h2>
        <div onClick={this.handleClick}>Click Me Change State(Own)</div>
        <div ref={btn => {this.btn = btn}}>Click Me Change State(Document)</div>
      </div>
    );
  }
}

StateAsynTest.propTypes = {
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(StateAsynTest);
