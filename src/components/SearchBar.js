import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search Movie" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:15,
        marginBottom:10,
    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth: 1,
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});


export default SearchBar;