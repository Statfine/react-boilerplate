import React from 'react';
import PropTypes from 'prop-types';

export default class Test2 extends React.PureComponent {
  state = {};
  render() {
    const { info } = this.props;
    console.log('render Test2', info.get('name'));
    return (
      <div>
        <p>Test2</p>
      </div>
    );
  }
}

Test2.propTypes = {
  info: PropTypes.object.isRequired,
};
