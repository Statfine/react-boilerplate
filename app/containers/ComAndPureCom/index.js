/**
 *
 * ComAndPureCom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Test1 from './Test1';
import Test2 from './Test2';

/**
 * Component下
 * Component和PureComponent对比
 */
export class ComAndPureCom extends React.Component {
  state = {
    val: 1,
  }
  handleClickChangeState = () => this.setState({ val: 2 })
  // handleClickChangeState = () => this.setState({ val: this.state.val + 1 })
  render() {
    const { val } = this.state;
    console.log('val', val);
    return (
      <div>
        <h2 onClick={this.handleClickChangeState}>PureComponent and Component</h2>
        <Test1 val={val} />
        <Test2 val={val} />
      </div>
    );
  }
}

ComAndPureCom.propTypes = {
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

export default compose(withConnect)(ComAndPureCom);
