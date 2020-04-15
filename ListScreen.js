import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
            { name: 'Matthew', age: 100},
            { name: 'Mark', age: 101},
            { name: 'Luke', age: 102},
            { name: 'John', age: 103},
            { name: 'Greg', age: 32},
            { name: 'Cody', age: 35},
            { name: 'Ranger', age: 10},
            { name: 'TJ', age: 34},
            { name: 'Andrew', age: 33}
    ];

    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false} #forAndroid
            keyExtractor={friend => friend.name}
            keyExtractor={friend => friend.age} 
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;