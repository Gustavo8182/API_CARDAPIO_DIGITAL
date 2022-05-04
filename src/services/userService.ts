import { UserRepository } from "../repositories/user.repository";
import { User} from "../entities/user.entity";


class UserService {

    async getAll() {
        return UserRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return UserRepository.getById(id);
    }


    create(user: User) {
        return UserRepository.create(user);
    }

   remove(id: number) {
        return UserRepository.delete(id);
    }

    update(id: number, user: User) {
        return UserRepository.update(id, user);
    }
}

export default new UserService();