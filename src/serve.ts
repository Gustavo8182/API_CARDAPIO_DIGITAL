import express, { Request, Response } from 'express';
import cors from 'cors';
import { connection } from './database/config';

import userRouter from './routes/users.routes';
import snackRouter from './routes/snack.routes';
import requestRouter from './routes/request.routes';

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', userRouter);
app.use('/snacks', snackRouter);
app.use('/request', requestRouter);

app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});


app.listen(port, async () => {
    await connection;
    console.log('Banco de dados conectado com sucesso!');
    console.log(`Servidor disponível na porta: ${port}`);
});


// connection.then(() => {
//     console.log('Banco de dados conectado com sucesso!');
// }).catch((err) => {
//     console.log(err);
// });