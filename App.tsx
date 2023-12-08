import React from 'react';
import {View, StatusBar} from 'react-native';
import FirstPage from './src/FirstPage';

function App() {
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} />
      <FirstPage />
    </View>
  );
}

export default App;
