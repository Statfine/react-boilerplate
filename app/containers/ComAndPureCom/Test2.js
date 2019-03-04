import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Test2 extends PureComponent {
  state = {};
  render() {
    const { val } = this.props;
    console.log('render Test2', val);
    return (
      <div>
        <p>Test2</p>
      </div>
    );
  }
}

Test2.propTypes = {
  val: PropTypes.number.isRequired,
};
