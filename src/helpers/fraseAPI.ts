import axios from 'axios';
import { error } from 'console';
import { randomBytes, randomFill } from 'crypto';

export const getFraseAPI = async () => {
    try {
        let json = await axios.get('https://jsonplaceholder.typicode.com/users/2');
        
        //console.log(json.data);
        
        let userName = json.data.name;        
        return userName;
    } catch (e) {
        // 
    }   
}
export const getEmailUser = async () => {
    try {
        let json = await axios.get('https://jsonplaceholder.typicode.com/users/2');
        //console.log(json.data.name);
        let userEmail = json.data.email;
        return userEmail;
    } catch (e) {
        // 
    }  
}