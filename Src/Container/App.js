
import React from 'react';
import { Provider } from 'react-redux';
import Styles from './Styles/AppStyles';
import configureStore from '../Redux';
import HomeScreen from './HomeScreen';
// import AppNavigation from '../Navigation';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <AppNavigation /> */}
        <HomeScreen />
      </Provider>
    )
  }
}


export default App;
