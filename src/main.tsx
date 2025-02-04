/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import storeApp from './data/redux/store';

function Main(): React.JSX.Element {
  return (
    <Provider store={storeApp}>
      <App />
    </Provider>
  );
}

export default Main;
