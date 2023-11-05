import React from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import { Text, Tile } from '@rneui/themed';
import data from '../data/index'; // Import the data from index.tsx

type TilesComponentProps = {};
const {width, height} = Dimensions.get('screen');

const Tiles = ({item}: any) => {

    return(
        <View style={styles.container}>
            {data.map((item:any) => (
                <Tile
                    key={item.id}
                    imageSrc={item.img}
                    title={item.title}
                    featured
                    caption={item.description}
                    activeOpacity={1}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      //  flex: 1,
    
    },
});

export default Tiles;
