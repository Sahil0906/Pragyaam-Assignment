import React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';


const ResultsList = ({ title, results, navigation }) => {
    // console.log(results)
    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.titleStyle}>Movie's Name</Text>
                <Text style={styles.Year}>Year</Text>
            </View>
    
            <FlatList 
                // showsHorizontalScrollIndicator={false}
                // horizontal={true}
                data={results}
                keyExtractor={(result) => result.imdbID}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{Title:item.Title, Year:item.Year})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15

    },
    container:{
        marginBottom:10
    },
    Year:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:155

    }
});


export default withNavigation(ResultsList);