import React from 'react';
import PropTypes from 'prop-types';

export default class Test1 extends React.Component {
  state = {};
  render() {
    const { val } = this.props;
    console.log('render Test1', val);
    return (
      <div>
        <p>Test1</p>
      </div>
    );
  }
}

Test1.propTypes = {
  val: PropTypes.number.isRequired,
};
