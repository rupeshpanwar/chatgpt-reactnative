import React from "react"
import {StyleSheet , View , Text, Image, TouchableOpacity} from "react-native"
import {Feather} from '@expo/vector-icons'

export default function Story({avatar, name, isCreateStory=false, isSeen}){
        return (
            <TouchableOpacity style={styles.user}>
            <View>
                <View 
                   style={[
                    styles.avatarBorder, {
                        borderColor: isCategory
                        ? "transparent"
                        : isSeen
                        ? "rgba(0,0,0,0,.0975)"
                        : "#c73191",
                    },
                ]}
                >
                <Image source={avatar} style={styles.avatar} />
                {
                    isCreateStory && (
                        <View style={styles.plusIcon}>
                        <Feather name="pulse" size={14} color="#fff" />
                        {name}
                        </View>
                    )}
                  </View>
                  <Text numbeofLines={1} style={styles.name}></Text>
                </View>
            </TouchableOpacity>
        )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    user: {
      width: '100%',
      paddingHorizontal: 20,
    },
    avatarBorder: {
      width: 56,
      height: 56,
      borderRadius: 28,
      borderWidth: 4,
      borderColor: 'white',
      margin: 10,
      alignSelf: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    plusIcon: {
      position: 'absolute',
      overflow: 'hidden',
      alignSelf: 'center',
      bottom: 0,
      right: 0,
      backgroundColor: '#ddd',
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    names: {
      textAlign: 'center',
      fontSize: 20,
      lineHeight: 20,
      color: '#333',
      maxWidth: '100%',
    },
  });
  