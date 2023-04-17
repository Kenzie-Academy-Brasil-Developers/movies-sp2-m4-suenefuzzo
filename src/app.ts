import express, { Application, Request, Response} from 'express';
import { startDatabase } from './database';
import { createMovie } from './logic';

const app: Application = express();
app.use(express.json());

/*ATENÇÃO: sempre REINICIE o servidor e DROP SUA TABELA E RECRIE NOVAMENTE, antes de cada novo teste ou bateria de testes, que for executar; */

app.post('/movies', createMovie);
app.get('/movies', );
app.get('/movies/:id', );
app.patch('/movies/:id', );
app.delete('/movies/:id', );


app.listen(3000, async () => {
    await startDatabase()
    console.log('Server is running!')
});