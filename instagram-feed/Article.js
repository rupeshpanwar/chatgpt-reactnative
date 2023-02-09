import data from './data'
import React from 'react'
import { StyleSheet, View, Text , Image,
Touchable , TextInput, Alert } from 'react-native'
import {Feather} from '@expo/vector-icons'


export default function Article({items}){

    return (
        <View style={StyleSheet.article}>
            <View style={style.header}>
            <View style={styles.user}>
                <TouchableOpacity>
                    <Image source={item.avatar} style={styles.avatar} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text numberOfLines={1} style={styles.name}>
                        {item.name}
                        </Text>
                </TouchableOpacity>

             </View>
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16} />
                </TouchableOpacity>
                </View>

                <Image source={item.image} style={styles.image} />

                <View style={styles.action}>
                    <View style={styles.actionLeft}>
                        <TouchableOpacity style={styles.actionButtpm}>
                            <Feather name="heart" size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButtpm}>
                            <Feather name="message-circle" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButtpm}>
                            <Feather name="send" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButtpm}>
                            <Feather name="bookmark" size={24} />
                        </TouchableOpacity>
                        </View>
                </View>

            <View style={styles.info}>
                <Text style={styles.likes}>likes</Text>
                <Text style={styles.commentCount}>view all comments</Text>
            </View>
        </View>
    )
}