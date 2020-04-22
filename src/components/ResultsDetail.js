import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container}>
            {/* <Image style={styles.imageStyle} source={{ uri: result.image_url}} /> */}
            <View style={styles.Title}>
                <Text>{result.Title}</Text>
            </View>
            <View style={styles.Year}>
                <Text>{result.Year}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        flexDirection:'row',
        borderColor:'black',
        paddingVertical:5
        // borderWidth:1,
        // height:20
    },
    Title:{
        fontWeight:'bold',
        width:270
        // fontSize:16
    },
    Year:{
        
    }
});

export default ResultsDetail;