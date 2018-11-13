/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {translationMessages} from './i18n';
import {DEFAULT_LOCALE} from './containers/LanguageProvider/constants';
import {LanguageProvider} from './containers/LanguageProvider';

import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  View,
} from 'react-native';

import Colors from './constants/Colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);

import TestScreen from './screens/TestScreen';

import TabNavigator from 'react-native-tab-navigator';

import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

const AppScreen = props => {
  return (
      <LanguageProvider locale={DEFAULT_LOCALE} messages={translationMessages}>
        <Provider store={store}>
          <TabNavigator sceneStyle={{}}>
            <TabNavigator.Item selected={props.selectedTab === 'test'}
                               title="Bid Flyer Tickets"
                               renderIcon={() => <MaterialCommunityIcons
                                   name={Platform.OS === 'ios' ?
                                       'history' :
                                       'history'}
                                   size={28}
                                   style={styles.barIcon}
                                   color={Colors.tabIconDefault}
                               />}
                               renderSelectedIcon={() => <MaterialCommunityIcons
                                   name={Platform.OS === 'ios' ?
                                       'history' :
                                       'history'}
                                   size={28}
                                   style={styles.barIcon}
                                   color={Colors.tabIconSelected}
                               />}
                               badgeText={props.requestCount}>
              <TestScreen/>
            </TabNavigator.Item>
          </TabNavigator>
        </Provider>
      </LanguageProvider>);

};

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    selectedTab: 'test',
    onSetScreen: null,
  };

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    this.setState({isLoadingComplete: true});
  }

  render() {
    const {isLoadingComplete, selectedTab} = this.state;
    if (!isLoadingComplete) {
      return <Text>Loading...</Text>;
    }
    return (<AppScreen selectedTab={selectedTab}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  barIcon: {marginBottom: -3},
});
