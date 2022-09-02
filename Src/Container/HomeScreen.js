
import React from 'react';
import {
  Button,
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
} from 'react-native/Libraries/NewHomeScreenScreen';
import { connect, Provider } from 'react-redux';
import Styles from './Styles/HomeScreenStyles';
import configureStore from '../Redux';
import OmdbActions from '../Redux/omdbRedux';

const store = configureStore();

class HomeScreen extends React.Component {
  
  onSearchClick = () => {
    this.props.onSearchRequest()
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <TextInput
            style={Styles.textInput} 
            onChangeText={(value) => this.props.onChangeTextInput(value)}
          />
          <Button 
            onPress={this.onSearchClick.bind(this)}
            title="Search"
          />
        </SafeAreaView>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    omdb: state.omdb
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTextInput: value => dispatch(OmdbActions.onChangeTextInput(value)),
    onSearchRequest: options => dispatch(OmdbActions.onSearchRequest(options)),
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
