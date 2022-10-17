/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { ContextProvider } from "./src/context/ContextProvider";
import RootApp from './App';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { name as appName } from './app.json';
const Apps = () => {
    return (
        <Provider store={Store}>
            <ContextProvider>
                <RootApp />
            </ContextProvider>
        </Provider>
    );
};
export default Apps;
AppRegistry.registerComponent(appName, () => Apps);
