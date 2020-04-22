import React, {useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import { NavigationEvents } from 'react-navigation';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term,setTerm] = useState('');

    console.log('term is', term)
    const [ searchApi, results, errorMessage ] = useResults();
   

    console.log(results);
    if(!results){
        return <ActivityIndicator size="large" style={{paddingTop:300}}/>
    }
    
    const appear = () => {
        
    }

    return(
        <>
            <SearchBar term={term} 
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            <NavigationEvents 
                    onWillBlur={appear}
                />
    
            {errorMessage ? <Text style={{paddingLeft:15}}>{errorMessage}</Text> : null}
            {/* <ScrollView> */}
                <ResultsList 
                    results={results}
                    // navigation = {navigation}
                />
            {/* </ScrollView> */}
        </>
    )
};


const styles = StyleSheet.create({

});


export default SearchScreen;