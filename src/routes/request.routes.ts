import { Router, Request, Response } from 'express';
import requestService from '../services/requestService'; '../services/RequestService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const request = await requestService.getAll();
    res.send(request);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await requestService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await requestService.create(req.body);
    res.status(201).send("Pedido criado com sucesso!");
});

router.delete('/:id', async (req: Request, res: Response) => {
    const requestId = parseInt(req.params.id);
    const request = await requestService.getById(requestId);
    if (!request) return res.status(404).send('Pedido não encontrado! ');

    await requestService.remove(requestId);
    return res.status(200).send('Pedido removido com sucesso!');
});


router.put('/:id', async (req: Request, res: Response) => {
    const requestId = parseInt(req.params.id);
    const request = await requestService.getById(requestId);
    if (!request) return res.status(404).send('Pedido não encontrado! ');

    await requestService.update(requestId, req.body);

    res.status(200).send('Pedido atualizado com sucesso!');
});


export default router;