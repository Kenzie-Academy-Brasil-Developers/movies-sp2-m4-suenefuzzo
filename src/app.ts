import express, { Application, Request, Response} from 'express';

const app: Application = express();
app.use(express.json());

/*ATENÇÃO: sempre REINICIE o servidor e DROP SUA TABELA E RECRIE NOVAMENTE, antes de cada novo teste ou bateria de testes, que for executar; */

app.post('/movies', );
app.get('/movies', );
app.get('/movies/:id', );
app.patch('/movies/:id', );
app.delete('/movies/:id', );


app.listen(3000, () => {
    console.log('Server is running!')
});