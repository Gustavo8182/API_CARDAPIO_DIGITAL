import { Request } from '../entities/request.entity';
import { getConnection } from 'typeorm';

export class RequestRepository {

    static getAll() {
        return getConnection().getRepository(Request).find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Request)
        .findOne(id);
    }

    static create(request: Request) {
        return getConnection()
        .getRepository(Request)
        .insert(request);
    }

    static delete(id: number) {
        return getConnection().getRepository(Request).delete(id);
    }

    static update(id: number, request: Partial<Request>) {
        return getConnection()
        .getRepository(Request)
        .update(id,request);
    }
}
