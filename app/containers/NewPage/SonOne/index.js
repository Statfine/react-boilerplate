import React, { PureComponent } from 'react';
import PropType from 'prop-types';

export default class SonOne extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    console.log(constructor);
    this.state = {
      title: 'hello',
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({ title: 'Hello SonOne' });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('Son', 'componentWillReceiveProps', nextProps.title);
  }
  // 上面两个UNSAFE生命周期不能同时使用
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(
  //     'Son',
  //     'getDerivedStateFromProps',
  //     nextProps.title,
  //     prevState.title,
  //   );
  //   return null;
  // }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.comP);
    console.log(this.myRef);
    console.log(this.myRef.current);
  }
  componentDidUpdate(prevProps) {
    console.log('Son', 'componentDidUpdate====>', prevProps.title, this.props.title);
  }
  handleCLick = () => {
    console.log('hello');
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <p>SonOne</p>
        <p
          ref={ref => {
            this.comP = ref;
          }}
        >
          {title}
        </p>
        <p ref={this.myRef}>{title}</p>
      </div>
    );
  }
}

SonOne.propTypes = {
  title: PropType.string.isRequired,
};
