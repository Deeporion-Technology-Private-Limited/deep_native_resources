import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

/**
 * Register the main component of the app.
 * This is the entry point for the React Native application.
 *
 * @param {string} appName - The name of the app as defined in app.json
 * @param {Function} () => App - A function that returns the root component of the app
 */
AppRegistry.registerComponent(appName, () => App);

// Note: To unmount the app, you would use:
// AppRegistry.unmountApplicationComponentAtRootTag(tag);
// where 'tag' is the root tag passed to runApplication
