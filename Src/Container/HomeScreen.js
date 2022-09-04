
import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
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
import MovieDetailFragment from '../Component/MovieDetailFragment';

class HomeScreen extends React.Component {
  
  onSearchClick = () => {
    this.props.onSearchRequest(
      {
        slug: "http://www.omdbapi.com/",
        params: {
          apikey: "49cb99aa",
          s: this.props.omdb.inputValue,
        },
        onSuccess: OmdbActions.onSearchSuccess,
        onFailure: OmdbActions.onSearchFailure,
      }
    )
  }

  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TextInput
            style={Styles.textInput} 
            onChangeText={(value) => this.props.onChangeTextInput(value)}
          />
          <Button 
            onPress={this.onSearchClick.bind(this)}
            title="Search"
          />
          {this.props.omdb.loading && (
            <ActivityIndicator 
              style={{ flex: 1}}
              size="large"
            />
          )}
          { this.props.omdb.error && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red'}}>{this.props.omdb.error}</Text>
            </View>
          )}
          { this.props.omdb.list && (
            <View style={{ flex: 1, marginTop: 10}}>
              <FlatList 
                data={this.props.omdb.list}
                renderItem={({ item }) => <MovieDetailFragment data={item}/>}
              />
            </View>
          )}
        </SafeAreaView>
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
