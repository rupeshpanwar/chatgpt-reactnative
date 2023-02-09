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
                        borderColor: isCreateStory
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
                        <Feather name="plus" size={14} color="#fff" />
                        </View>
                    )}
                  </View>
                  <Text numbeofLines={1} style={styles.name}>
                    {name}
                  </Text>
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
      width: 80,
      paddingHorizontal: 4,
    },
    avatarBorder: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
      margin: 4,
      marginBottom: 8,
      justifyContent: 'center',
      alignItems: 'center',
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
      backgroundColor: 'blue',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      textAlign: 'center',
      fontSize: 12,
      lineHeight: 16,
      color: 'black',
      maxWidth: 64,
    },
  });
  