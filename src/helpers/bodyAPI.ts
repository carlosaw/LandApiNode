import axios from 'axios';
import { json } from 'express';

export const getBodyAPI = async () => {
    try {
        let body = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response){
            const json = response.data.body;
            
            console.log(json);
            
        });
        //return body;
        
    } catch (e) {
        console.log(e);
    }
    
}