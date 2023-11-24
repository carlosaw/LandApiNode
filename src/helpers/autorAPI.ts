import axios from 'axios';

export const getAutorAPI = async () => {
    
    let json = await axios('https://allugofrases.herokuapp.com/frases/random');
    return json.data;
}