import React, { Component } from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';
import Styles from './Styles/MovieDetailFragmentStyles';

export default class MovieDetailFragment extends Component {

  render(){
    return (
      <View style={Styles.container}>
        <View style={Styles.leftBox}>
          <Image 
            style={{ width: 80, height: 80}}
            resizeMode="cover"
            source={{ uri: this.props.data.Poster}}
          />
        </View>
        <View style={Styles.rightBox}>
          <Text style={Styles.title}>{this.props.data.Title}</Text>
          <Text>{this.props.data.Year}</Text>
        </View>
        
      </View>
    )
  }
}