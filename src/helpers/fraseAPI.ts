import axios from 'axios';

export const getFraseAPI = async () => {
    
    let json = await axios('https://allugofrases.herokuapp.com/frases/random');
    return json.data;
           
}