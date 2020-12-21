import {injectable} from "inversify";
import {CostRepositoryInterface} from '../interfaces/cost.repository.interface';
import {PostInterface} from './post';

@injectable()
export class CostRepository implements CostRepositoryInterface {
    create(post: PostInterface): Promise<boolean> {
        return Promise.resolve(true);
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(true);
    }

    findAll(): Promise<PostInterface[]> {
        return Promise.resolve([{status: 'HELLO WORLD FROM CostRepositoryInterface!!!'}]);
    }

    findById(id: number): Promise<PostInterface> {
        return Promise.resolve({status: `found by ${id} in CostRepositoryInterface!!!`});
    }

    update(id: number, post: PostInterface): Promise<boolean> {
        return Promise.resolve(true);
    }

}
