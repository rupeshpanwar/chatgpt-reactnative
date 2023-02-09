import React from 'react';
import { FlatList } from 'react-native';
import Story from './story';


export default function Stoies({stories,profile}){
    function renderItems({item,index}){
        
        if(index === 0){
            return (
                <>
                <Story 
                    name = 'Clarian North'
                    avatar={profile.avatar}
                    isCreateStory={true}
                    />
                    <Story 
                    name = {item.name}
                    avatar={item.avatar}
                    isCreateStory={item.isSeen}
                    />
                </>
            );
        } else {
            return (
                <Story 
                    name = {item.name}
                    avatar={item.avatar}
                    isCreateStory={item.isSeen}
                    />
            );
        }
    }

    return (
        <FlatList
        data={stories}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        />
        );
        
        
}