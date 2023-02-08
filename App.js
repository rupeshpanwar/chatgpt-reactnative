import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import initialData from './instagram-feed/data'


const renderItem = ({ item }) => (
  <View>
  <Text>name: {item.name}</Text>
  <Text>likes: {item.likes}</Text>
  <Text>comments: {item.comment}</Text>
  </View>
  );


export default function App() {
return (
<FlatList
data={initialData.articles}
renderItem={renderItem}
keyExtractor={(item) => item.name}
/>
);
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Instagram Feed App</Text>
//       <Text>initialData.articles[0].name</Text>
//       <Text>initialData.articles[0].likes</Text>
//       <Text>initialData.articles[0].comment</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
