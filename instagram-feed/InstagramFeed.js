// import { StatusBar } from 'expo-status-bar';
// import { FlatList, StyleSheet, Text, View , Image , TouchableOpacity
// , SafeAreaView} from 'react-native';
// import data from './data';
// import {Feather} from '@expo/victor-icons'
// import Stories from './stories'

// const INSTAGRAM_LOGO="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"


// export default function Instagram() {
//     function renderItem({item,index}){
//         if(index === 0){
//             return (
//                 <>
//                 <View style={styles.stories}>
//                     <Stories stories={data.stories} profile={data.profile} />
//                 </View>
//                 </>
//             )
//         } else {
//             return;
//         }
//     }



// return (
//     <SafeAreaView style={styles.container}>
//         <StatusBar style='dark' />
//    <View style={styles.header}>
//     <TouchableOpacity>
//         <Feather name="camera" size={24} />
//         </TouchableOpacity> 


//         <Image source={uri: INSTAGRAM_LOGO} style={styles.logo} />
//         <TouchableOpacity>
//             <Feather name="send" size={24} />
//             </TouchableOpacity>  
//    </View>
//   <SafeAreaView>
//         {/* <View style={styles.container}>
//             <Text>{'\n'}</Text>
//             <Text>Instagram App {'\n'}</Text>
//             <StatusBar style="auto" />
//         </View> */}
// <FlatList
// data={data.articles}
// renderItem={({item}) => (
//  <View style={styles.itemContainer}>
//   <Image 
//     style={styles.image}
//     source={item.image}
//   />
//   <Text>name: {item.name}</Text>
//   <Text>likes: {item.likes}</Text>
//   <Text>comments: {item.comments}</Text>
//   </View>
// )}

// keyExtractor = {(item) => item.id.toString()}
// showsVerticalScrollIndicator={false}
// />
// <StatusBar style="auto" />
// </SafeAreaView>
// );
// }


// const styles = StyleSheet.create({
//     itemContainer: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: 'lightGray'
//     },
//    container: {
//             flex: 1,
//             backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//     },
//     image: {
//             width: '100%',
//             height: 200,
//             resizeMode: 'contain',
//             marginVertical: 10,
//     },
//     logo: {
//         flex: 1,
//         height: 30,
//         resizeMode: 'contain',
//     },
//     header: {
//         boarderBottomWidth:1,
//         boarderBottomColor: '#dbdbdb',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         height: 44
//     }
// });


import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View , Image , TouchableOpacity, SafeAreaView } from 'react-native';
import data from './data';
import {Feather} from '@expo/vector-icons'
import Stories from './stories'

const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";


export default function Instagram() {
    function renderItem({item,index}){
        if(index === 0){
            return (
                <>
                <View style={styles.stories}>
                    <Stories stories={data.stories} profile={data.profile} />
                </View>
                </>
            )
        } else {
            return;
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24} />
                </TouchableOpacity> 


                <Image source={{uri:INSTAGRAM_LOGO}} style={styles.logo} />
                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>  
            </View>
            <SafeAreaView>
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

                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightGray'
    },
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
    logo: {
        flex: 1,
        height: 30,
        resizeMode: 'contain',
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 44
    }
});
