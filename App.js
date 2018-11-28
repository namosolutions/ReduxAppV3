import React, {Component} from 'react';
import {View} from 'react-native';
import FlatListClass from './src/component/flatList/flatList';
import styles from './src/style/style';
import {Provider} from 'react-redux';
import Store from './src/redux/store/store';

export default class App extends Component{
  render() {
    return (
      <Provider store={Store}>
      <View style={styles.container}>
       <FlatListClass/>
        </View>
       </Provider>
    );
  }
}
