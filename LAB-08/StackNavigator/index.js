/**
 * @format
 */
import 'react-native-gesture-handler';   // ✅ ADD THIS LINE AT TOP

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
