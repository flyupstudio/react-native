import React from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  View,
  Text,
  Platform,
  Image,
  ToolbarAndroid,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import trans from '../../trans';

//let wallet;
import { CButton,StyledButtonAccept, CText,CTextInput, BText, TransButton, ViewStyles, CustomStyles } from '../../components/CustomElements';


export default class LoginScreen extends React.Component {

  state = {
    loading: true,
    information: {}
  };

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const {loading, information, onGetBidData} = this.props;
    this.setState({information, loading});
    onGetBidData();
  }

  componentWillReceiveProps(nextProps){
    const {loading, information} = nextProps;
    //alert(JSON.stringify(information));
    this.setState({information, loading});
  }

  handlerAddPrice(i) {
    const {information} = this.state;
    if (typeof information[i] !== 'undefined') {
      let e = information[i];
      let sum = e.minBidInc + e.startingPrice;
      e.startingPrice = e.maxPrice <= sum ? e.maxPrice : sum;
      information[i] = e;
      this.setState({information});
    }
  }

  render() {
    const {loading, information} = this.state;
    let screen = null;
    if (loading) {
      screen = <View style={ViewStyles.ticketViewLoading}><BText style={ViewStyles.ticketTitle}>{trans('Loading')} ...</BText></View>
    } else {
      screen = information.map((e, i)=>{
        return <View style={ViewStyles.ticketView} key={i}>
              <Image style={ViewStyles.ticketImg} source={{uri: e.imageUrl}} />
              <BText style={ViewStyles.ticketTitle}>{e.outboundId} - {e.inboundId}</BText>
              <Text style={ViewStyles.ticketPreview}>{e.viewersCount} {trans('viewingThis')}</Text>
              <StyledButtonAccept onPress={this.handlerAddPrice.bind(this, i)} title={`${trans("nowFrom")} ${e.currencySymbol}${e.startingPrice}`} />
          </View>
      });
    }
    return (
      <View style={CustomStyles.containerTop}>
        <StatusBar backgroundColor="#1C3AA9"
                    barStyle="light-content" />
        <ToolbarAndroid
          title={trans("Somedata")}
          style={CustomStyles.androidToolStyle}
          titleColor='white'
        />
        <ScrollView style={{width:"100%", paddingLeft:10, paddingRight:10}}>
          <View style={ViewStyles.screen}>
            {Platform.OS === 'ios' ? <BText style={ViewStyles.ticketTitle}>{trans("Somedata")}</BText> : null}
            {screen}
          </View>
        </ScrollView>
      </View>
    );
  }

}

