import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View , Image , TouchableOpacity, SafeAreaView } from 'react-native';
import data from './data';
import {Feather} from '@expo/vector-icons'
import Stories from './stories'
import Constants from 'expo-constants';
import Article from './Article';
import { Camera } from 'expo-camera';
import React,{useState} from 'react';

const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";



export default function Instagram() {

    const [showCamera,setShowCamera] = useState(false);
    const [cameraType,setCameraType] = useState(Camera.Constants.Type.back);

    function renderItem({item,index}){
        if(index === 0){
            return (
                <>
                <View style={styles.stories}>
                    <Stories stories={data.stories} profile={data.profile} />
                </View>
                <Article item={item} />
                </>
            )
        } 
        else {
            
            return <Article item={item} />;
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24} 
                    onPress={() => {
                        setShowCamera(!showCamera);
                        setCameraType(cameraType === Camera.Constants.Type.back ?
                        Camera.Constants.Type.front:
                        Camera.Constants.Type.back
                            );
                    }}
                    />
                </TouchableOpacity> 

                <Image source={{uri:INSTAGRAM_LOGO}} style={styles.logo} />
                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>  
            </View>
         
            <FlatList
                    data={data.articles}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
            />  

              {
                showCamera && (
                    <Camera style={styles.camera} type={cameraType}>
                        <View style={styles.cameraContainer}>
                            <TouchableOpacity onPress={() => setShowCamera(false)}>
                                <Feather name="x" size={24} color="white" /> 
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )
              }
            </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTime: Constants.statusBarHeight
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
    },
    stories:{
        borderBottomWidth:1,
        borderBottomColor: '#dbdbdb',
        height: 104,
        padding: 10,
        backgroundColor: '#fafafa'
    }
});
