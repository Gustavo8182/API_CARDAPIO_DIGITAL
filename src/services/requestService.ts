import { RequestRepository } from '../repositories/request.repository';
import { Request} from '../entities/request.entity';


class RequestService {

    async getAll() {
        return RequestRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return RequestRepository.getById(id);
    }


    create(request: Array<Request>) {
        let element;
        for (let index = 0; index < request.length; index++) {
            element = RequestRepository.create(request[index]);
            
        }
        return element;
    }

   remove(id: number) {
        return RequestRepository.delete(id);
    }

    update(id: number, request: Request) {
        return RequestRepository.update(id, request);
    }
}

export default new RequestService();