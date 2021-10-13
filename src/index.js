import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

const App = () =>{
  return(
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor='#131238' />
      <Routes />
    </Provider>
  )
}
export default App;
