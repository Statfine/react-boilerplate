import React, { PureComponent } from 'react';
import PropType from 'prop-types';
// import _ from 'lodash';

export default class ExamplePage extends PureComponent {
  state = {
    te: 'te',
  };
  // 只要接受到新的props就会执行componentDidUpdate
  componentDidUpdate(prevProps) {
    console.log('ExamplePage', this.props.flag, prevProps.flag);
    if (prevProps.flag && this.props.flag !== prevProps.flag) {
      this.handleDoSomething();
    }
  }

  handleDoSomething = () => {
    console.log('handleDoSomething');
  };

  handleOnClick = () => {
    for (let i = 0; i < 10; i += 1) {
      console.log(i);
      if (i === 5) break;
    }
    this.setState({ te: 'a' }, () => {
      console.log('over');
    });
  };

  handleSetState = () => {
    console.log(this.state.te);
    this.setState({ te: 'haha' });
    console.log('1:', this.state.te);
    setTimeout(() => {
      console.log('2:', this.state.te);
    }, 1);
    console.log('3:', this.state.te);
  };

  /**
   * state 只要改变就会render
   */
  render() {
    console.log('ex render');
    const { title } = this.props;
    return (
      <div>
        <p onClick={this.handleSetState}>{title}</p>
      </div>
    );
  }
}

ExamplePage.propTypes = {
  title: PropType.string.isRequired,
  flag: PropType.bool.isRequired,
};
