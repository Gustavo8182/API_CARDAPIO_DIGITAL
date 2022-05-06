import { Router, Request, Response } from 'express';
import userService from '../services/userService';
import UserService from '../services/userService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await UserService.getAll();
    res.send(users);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await UserService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const result = await UserService.getByEmail(req.body);
        if(result?.email == req.body.email){
            res.send(result);
        }        
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await UserService.create(req.body);
    res.status(201).send("Usuario criado com sucesso!");
});

router.delete('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = await userService.getById(studentId);
    if (!student) return res.status(404).send('Usuario não encontrado! ');

    await userService.remove(studentId);
    return res.status(200).send('Usuario removido com sucesso!');
});


router.put('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const student = await userService.getById(studentId);
    if (!student) return res.status(404).send('Usuario não encontrado! ');

    await userService.update(studentId, req.body);

    res.status(200).send('Usuario atualizado com sucesso!');
});


export default router;