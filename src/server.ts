import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import { getFraseAPI, getEmailUser } from './helpers/fraseAPI';

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));



server.get('/', async (req, res) => {
    let name: string = 'Fulano';

    let now: Date = new Date();
    let hours: number = now.getHours();
    let minutes: number = now.getMinutes();
    let hourStr: string = hours < 10 ? '0' + hours : hours.toString();
    let minStr: string = minutes < 10 ? '0' + minutes : minutes.toString();

    let greeting: string = 'Boa noite';
    if (hours > 0 && hours < 12) {
        greeting = 'Bom dia';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Boa tarde';
    }

    let frase = await getFraseAPI();
    let userName = await getFraseAPI();
    let userEmail = await getEmailUser();

    res.render('home', {
        time: `${hourStr}:${minStr}`,
        name,
        greeting,
        phrase: frase,
        //author: frase.autor
        userName,
        userEmail
        
    });
});

server.listen(8000, () => {
    console.log(`Server rodando em http://localhost:8000`);
});