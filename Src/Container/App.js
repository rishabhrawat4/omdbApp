
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import Styles from './Styles/AppStyles';
import configureStore from '../Redux';
import HomeScreen from './HomeScreen';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    )
  }
}


export default App;
