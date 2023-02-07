import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import initialData from './instagram-feed/data'

export default function App() {
  return (
    <View style={styles.container}>
      {console.log(initialData.articles[0].name)}
      <Text>Instagram Feed App</Text>
      <StatusBar style="auto" />
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
