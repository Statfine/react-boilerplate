import React from 'react';
import PropTypes from 'prop-types';

export default class Test1 extends React.PureComponent {
  state = {};
  render() {
    const { info } = this.props;
    console.log('render Test1', info.name);
    return (
      <div>
        <p>Test1</p>
      </div>
    );
  }
}

Test1.propTypes = {
  info: PropTypes.object.isRequired,
};
