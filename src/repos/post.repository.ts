import {injectable} from "inversify";
import {PostRepositoryInterface} from '../interfaces/post.repository.interface';
import {PostInterface} from './post';

@injectable()
export class PostRepositoryImpl implements PostRepositoryInterface{
    create(post: PostInterface): Promise<boolean> {
        return Promise.resolve(true);
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    findAll(): Promise<PostInterface[]> {
        return Promise.resolve([{status: 'HELLO WORLD FROM PostRepositoryInterface!!!'}]);
    }

    findById(id: number): Promise<PostInterface> {
        return Promise.resolve({status: `found by ${id} in PostRepositoryInterface!!!`});
    }

    update(id: number, post: PostInterface): Promise<boolean> {
        return Promise.resolve(true);
    }

}

