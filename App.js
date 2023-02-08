import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View , Image } from 'react-native';
import data from './instagram-feed/data';


export default function Instagram() {
return (
  <View>
  <View style={styles.container}>
  <Text>Instagram App {'\n'}</Text>
  <StatusBar style="auto" />
  </View>
<FlatList
data={data.articles}
renderItem={({item}) => (
 <View style={styles.itemContainer}>
  <Image 
    style={styles.image}
    source={item.image}
  />
  <Text>name: {item.name}</Text>
  <Text>likes: {item.likes}</Text>
  <Text>comments: {item.comments}</Text>
  </View>
)}

keyExtractor = {(item) => item.id.toString()}
showsVerticalScrollIndicator={false}
/>
<StatusBar style="auto" />
</View>
);
_}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
image: {
width: '100%',
height: 200,
resizeMode: 'contain',
marginVertical: 10,
},
});


// import { StatusBar } from 'expo-status-bar';
// import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
// import data from './instagram-feed/data';

// export default function Instagram() {
//   return (
//     <View>
//       <View style={styles.container}>
//         <Text>Instagram App</Text>
//         <StatusBar style="auto" />
//       </View>
//       <FlatList
//         data={data.articles}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image
//               style={styles.image}
//               source={{ uri: item.image }}
//             />
//             <Text>name: {item.name}</Text>
//             <Text>likes: {item.likes}</Text>
//             <Text>comments: {item.commentCount}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginVertical: 10,
//   },
// });


