/**
 *
 * ImmutablePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fromJS } from 'immutable';
import Test1 from './Test1';
import Test2 from './Test2';

const INFO = {
  name: 'sj',
  fav: [
    { id: 1, name: '体育' },
    { id: 2, name: '阅读' },
    { id: 3, name: '音乐' },
    { id: 4, name: '电影' },
    { id: 5, name: '旅行' },
  ],
}

/**
 * React.Component下
 * immutable toJS 导致重复渲染
 */
export class ImmutablePage extends React.Component {

  state = {
    info: fromJS(INFO),
  };

  handleChangeName = () => this.setState({ info: this.state.info.set('name', 'sj') });

  render() {
    const { info } = this.state;
    console.log('render');
    return (
      <div>
        <div>{info.get('name')}</div>
        <div onClick={this.handleChangeName}>Change name</div>
        <div>Change name</div>
        <Test1 info={info.toJS()} />
        <Test2 info={info} />
      </div>
    );
  }
}

ImmutablePage.propTypes = {
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

export default compose(withConnect)(ImmutablePage);
