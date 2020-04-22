import {useState,useEffect} from 'react';
import axios from 'axios';


export default () => {
    const [results, setResults] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')

    

    const searchApi = async (searchTerm) => {
        try{
           
            const response = await axios.get(`http://www.omdbapi.com/?apikey=20ad9813&s=${searchTerm}`
                // params:{
                //     limit:50,
                //     term : searchTerm,
                //     location: 'san jose'
                // }
            );
            // console.log(response.data.Search);
            if(response.data.Error){
                console.log(response.data)
                setErrorMessage(response.data.Error)
            }
            else{
                setResults(response.data.Search)
            }
            
        }catch(err){
            setErrorMessage('Something went Wrong with Internet!!')
        }
        
    }


    useEffect(() => {
        searchApi('taken');
    },[])

    return [searchApi,results,errorMessage];
};