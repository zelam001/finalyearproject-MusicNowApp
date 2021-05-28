/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)

AppRegistry.registerComponent(appName, () => App);
