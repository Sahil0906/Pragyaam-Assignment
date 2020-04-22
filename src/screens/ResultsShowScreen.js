import React, {useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons'
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
    {
      id: 1,
      name: 'A Beautiful Mind',
    },
    {
      id: 2,
      name: 'Taken',
    },
    {
      id: 3,
      name: 'A History of Violence',
    },
    {
      id: 4,
      name: 'Titanic',
    },
    {
      id: 5,
      name: 'Conjuring',
    },
    {
      id: 6,
      name: 'Singham',
    },
    {
      id: 7,
      name: 'Don',
    },
    {
      id: 8,
      name: 'Swift',
    },
    {
        id: 9,
        name: 'Ant-Man',
      },
      {
        id: 10,
        name: 'Assassination',
      },
      {
        id: 11,
        name: 'Attack on Titan',
      },
      {
        id: 12,
        name: 'Avengers',
      },
      {
        id: 13,
        name: 'Baahubali',
      },
      {
        id: 14,
        name: 'Baaghi',
      },
      {
        id: 15,
        name: 'Batla house',
      },
      {
        id: 16,
        name: 'Beauty and the beast',
      },
      {
        id: 17,
        name: 'Captain America',
      },
      {
        id: 18,
        name: 'Civil War',
      },
      {
        id: 19,
        name: 'Chori chori chupke chupke',
      },
      {
        id: 20,
        name: 'Deadpool',
      },
      {
        id: 21,
        name: 'Dream girl',
      },
      {
        id: 22,
        name: 'Dhoom',
      },
      {
        id: 23,
        name: 'Divergent',
      },
      {
        id: 24,
        name: 'Death Note',
      },
      {
          id: 25,
          name: 'End game',
        },
        {
          id: 26,
          name: 'fast anf furious',
        },
        {
          id: 27,
          name: 'Force',
        },
        {
          id: 28,
          name: 'Golmal',
        },
        {
          id: 29,
          name: 'gully boy',
        },
        {
          id: 30,
          name: 'Family man',
        },
        {
          id: 31,
          name: 'special ops',
        },
        {
          id: 32,
          name: 'Kite',
        },
        {
            id:33,
            name:'Zombie'
        },
        {
            id: 34,
            name: 'kaabil',
          },
          {
            id: 35,
            name: 'kingsman',
          },
          {
            id: 36,
            name: 'Life is beautiful',
          },
          {
            id: 37,
            name: 'love aaj kal',
          },
          {
            id: 38,
            name: 'Masterpiece',
          },
          {
            id: 39,
            name: 'Men in black',
          },
          {
            id: 40,
            name: 'Mission Mangal',
          },
          {
              id:41,
              name:'Neerjs'
          },
          {
            id:42,
            name:'Notebook'
        },
        {
            id: 43,
            name: 'Om shanti om',
          },
          {
            id: 44,
            name: 'pirates of the caribbean',
          },
          {
            id: 45,
            name: 'prince of persia',
          },
          {
            id: 46,
            name: 'Roy',
          },
          {
            id: 47,
            name: 'Rustom',
          },
          {
            id: 48,
            name: 'Tiger zinda hai',
          },
          {
            id: 49,
            name: 'Welcome',
          },
          {
              id:50,
              name:'zodiac'
          },
        
  ];


const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const [term,setTerm] = useState(null);
    const Title = navigation.getParam('Title');
    const Year = navigation.getParam('Year');

    // console.log(id);

    const getResult = async (Title) => {

        const response = await axios.get(`http://www.omdbapi.com/?apikey=20ad9813&t=${Title}`)
        console.log(response.data)
        setResult(response.data);
     
    }

    useEffect(() => {
  
        getResult(Title,Year)
    },[]);

    if (!result){
        return null;
    }
    
    return(
        <View >
            <View style={styles.container}>
            <SearchableDropdown
                onTextChange={text => console.log(text)}
                onItemSelect={text => getResult(text.name)}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                }}
                itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 700 }}
                items={items}
                defaultIndex={1}
                placeholder="Enter Movie name"
                underlineColorAndroid="transparent"
            />
            <Image style={styles.image} source={{ uri: result.Poster}}/>
            <Text style={styles.Title}>{result.Title}</Text>
            <Text style={{paddingLeft:15, paddingVertical:5, fontWeight:'700'}}>Film Series</Text>
            <Text style={styles.Plot}>{result.Plot}</Text>
            <Text style={styles.rating}>IMDb {result.imdbRating}</Text>
            <Text style={{paddingHorizontal:15}}>{result.Year}    {result.Runtime} <AntDesign name="play"/></Text>
            <Text style={{ paddingLeft:15}}><Text style={{fontWeight:'bold'}}>Languages: </Text>{result.Language}</Text>
            <Text style={styles.director}><Text style={{ fontWeight:'bold', color:'black'}}>Director:</Text> {result.Director}</Text>
            <Text style={styles.Actors}><Text style={{ fontWeight:'bold', color:'black'}}>Actors: </Text>{result.Actors}</Text>
        </View>

        </View>
        
    );
};

ResultsShowScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container:{
        paddingTop:30
        // borderWidth:1,
        // width:250,
        // justifyContent:'space-around'
    },
    image:{
        width:360,
        height:200
    },
    Title:{
        
        fontWeight:'bold',
        fontSize:25,
        paddingHorizontal:15,
        // paddingBottom:100
    },
    Plot:{
        paddingLeft:15,
        paddingRight:5
    },
    rating:{
        paddingTop:5,
        paddingHorizontal:15
    },
    director:{
        paddingTop:5,
        paddingLeft:15,
        color:'blue'
    },
    Actors:{
        paddingTop:5,
        paddingLeft:15,
        color:'blue',
        paddingRight:5
    }
});


export default ResultsShowScreen;