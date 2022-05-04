import { SnackRepository } from './../repositories/snack.repository';
import { Snack } from './../entities/snack.entity';


class SnackService {

    async getAll() {
        return SnackRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return SnackRepository.getById(id);
    }


    create(snack: Snack) {
        return SnackRepository.create(snack);
    }

   remove(id: number) {
        return SnackRepository.delete(id);
    }

    update(id: number, snack: Snack) {
        return SnackRepository.update(id, snack);
    }
}

export default new SnackService();