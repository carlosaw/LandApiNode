import axios from 'axios';
import { json } from 'express';

export const getTitleAPI = async () => {
    try {
        let title = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            const json = response.data.title;
            
            console.log(json);
        });
        //return title;
                
    } catch (e) {
        console.log(e);
    }
}