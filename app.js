import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/store'
import SignIn from './src/components/signin';
import SignUp from './src/components/signup';
import Medication from './src/components/medication';
import Header from './src/components/header';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Header />
        <SignUp />
        <SignIn />
        <Medication />
      </PaperProvider>
    </Provider>
  );
}
