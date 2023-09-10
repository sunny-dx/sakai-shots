import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Editor from './src/Editor';
import Preview from './src/Preview';
import ContextProvider from './GlobalContext';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#121212',
  },
  previewContainer: {
    height: 0,
    width: 0,
    overflow: 'hidden',
  },
});
const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor="#121212" style="dark" />
      <ContextProvider>
        <Preview scale={1} />
        <View style={styles.previewContainer}>
          <Preview scale={5} exportable={true} />
        </View>
        <Editor />
      </ContextProvider>
    </SafeAreaView>
  );
};

export default App;
