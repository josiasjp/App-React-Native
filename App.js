import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';

//função que inclui os componentes do react de acordo com as 
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main></Main>
      <StatusBar style="auto" />
      <Text>Hello world nunca pode faltar</Text>
    </View>
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
