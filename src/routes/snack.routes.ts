import { Router, Request, Response } from 'express';
import SnackService from '../services/snackService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const snack = await SnackService.getAll();
    res.send(snack);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await SnackService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await SnackService.create(req.body);
    res.status(201).send("Lanche criado com sucesso!");
});

router.delete('/:id', async (req: Request, res: Response) => {
    const snackId = parseInt(req.params.id);
    const snack = await SnackService.getById(snackId);
    if (!snack) return res.status(404).send('Lanche não encontrado! ');

    await SnackService.remove(snackId);
    return res.status(200).send('Lanche removido com sucesso!');
});


router.put('/:id', async (req: Request, res: Response) => {
    const snackId = parseInt(req.params.id);
    const snack = await SnackService.getById(snackId);
    if (!snack) return res.status(404).send('Lanche não encontrado! ');

    await SnackService.update(snackId, req.body);

    res.status(200).send('Lanche atualizado com sucesso!');
});


export default router;