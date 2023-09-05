import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/styles/temas'


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black}/>
      <Login/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
