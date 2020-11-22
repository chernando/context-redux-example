import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducer, { changeName } from './reducer';

import Header from './Header';
import Main from './Main';

interface AppWithContextProps {
  changeProfile: any;
}

const store = configureStore({
  reducer,
})

const AppWithContext: React.FC<AppWithContextProps> = ({ changeProfile }) => {
  changeProfile.current = (name: string) => store.dispatch(changeName(name));
  
  console.log('AppWithRedux render');

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default AppWithContext;
