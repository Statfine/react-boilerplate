/**
 *
 * NewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectNum } from './selectors';
import { actionAdd, actionDelete, actionReset } from './actions';
import reducer from './reducer';
import saga from './saga';

import { ActionContent, Container, ChildrenDiv } from './styled';
import ExamplePage from './ex';

import SonOne from './SonOne';
import SonTwo from './SomTwo';

/* eslint-disable react/prefer-stateless-function */
export class NewPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      title: 'hello',
      flag: false,
      page: 2,
    };
  }
  componentWillMount() {
    this.setState({ title: 'Hello world' });
  }
  componentDidMount() {
    // console.log('father');
    console.log('NewPage', this.myRef);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.num !== this.props.num) {
      this.setState({ title: 'change', flag: !this.state.flag });
      console.log('Father', 'componentWillReceiveProps', 'change');
    }
  }
  handleClick = () => {
    this.new();
  };
  render() {
    console.log('father render');
    const { title, flag, page } = this.state;
    const {
      num,
      dispatchActionAdd,
      dispatchActionDelete,
      dispatchActionReset,
    } = this.props;
    return (
      <div>
        <p onClick={this.handleClick}>crash log</p>
        <Container>
          <p>Father</p>
          <p>state.title=> {title}</p>
          <p>props.num=> {num}</p>
          <ActionContent>
            <p onClick={dispatchActionAdd}>Add</p>
            <p onClick={dispatchActionDelete}>Delete</p>
            <p onClick={() => dispatchActionReset(0)}>Reset</p>
          </ActionContent>
        </Container>
        <div style={{ color: page === 1 ? '#4885ed' : '#000' }} onClick={() => this.setState({ page: 1 })}>单纯props改变组件渲染</div>
        <div style={{ color: page === 2 ? '#4885ed' : '#000' }} onClick={() => this.setState({ page: 2 })}>新生命周期（ref属性）</div>
        <div style={{ color: page === 3 ? '#4885ed' : '#000' }} onClick={() => this.setState({ page: 3 })}>componentDidUpdate验证</div>
        {page === 1 && <SonTwo flag={flag} />}
        {page === 2 && <SonOne ref={this.myRef} title={title} />}
        {page === 3 && <ChildrenDiv>
          <ExamplePage title={title} flag={flag} />
        </ChildrenDiv>}
      </div>
    );
  }
}

NewPage.propTypes = {
  // dispatch: PropTypes.func.isRequired, // eslint-disable-line
  num: PropTypes.number.isRequired,
  dispatchActionAdd: PropTypes.func.isRequired,
  dispatchActionDelete: PropTypes.func.isRequired,
  dispatchActionReset: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  num: makeSelectNum(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchActionAdd: () => dispatch(actionAdd()),
    dispatchActionDelete: () => dispatch(actionDelete()),
    dispatchActionReset: val => dispatch(actionReset(val)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'newPage', reducer });
const withSaga = injectSaga({ key: 'newPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewPage);
