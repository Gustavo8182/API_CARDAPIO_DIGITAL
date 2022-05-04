import { Snack } from '../entities/snack.entity';
import { getConnection } from 'typeorm';

export class SnackRepository {

    static getAll() {
        return getConnection().getRepository(Snack).find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Snack)
        .findOne(id);
    }

    static create(snack: Snack) {
        return getConnection()
        .getRepository(Snack)
        .insert(snack);
    }

    static delete(id: number) {
        return getConnection().getRepository(Snack).delete(id);
    }

    static update(id: number, snack: Partial<Snack>) {
        return getConnection()
        .getRepository(Snack)
        .update(id,snack);
    }
}
