import React from 'react';
import {connect} from 'react-redux';
import TestScreen from '../../components/Test';
import immutableProps from '../../hocs/immutableProps';
import {getBidFlyer} from './actions';

const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['test', 'loading']),
    information: state.getIn(['test', 'information']),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetBidData: (data) => {
    return dispatch(getBidFlyer(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
    immutableProps(TestScreen));
