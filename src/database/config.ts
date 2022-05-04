import { createConnection } from 'typeorm';
import { User} from '../entities/user.entity';
import { Snack } from '../entities/snack.entity';
import { Request } from '../entities/request.entity';


export const connection = createConnection({
    type: 'mysql',
    host: 'acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'wea9efv2b8m5hwl5',
    password: 'xewdkzoyjendjqyr',
    database: 'vaz59mbwdpwyhar1',
    entities: [
        User,
        Snack,
        Request
    ],
    logging: true,
    // synchronize: true
});