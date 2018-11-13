import React from 'react';
import TestContainer from '../containers/TestReduxContainer';
import trans from '../trans';

export default class TestScreen extends React.Component {
  static navigationOptions = {};

  render() {
    return (
        <TestContainer {...this.props} />
    );
  }
}
