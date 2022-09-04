/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Src/Container/App';
import {name as appName} from './app.json';

if(__DEV__) {
  import('./Src/Services/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent(appName, () => App);
