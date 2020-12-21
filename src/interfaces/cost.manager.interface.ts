import {PostInterface} from '../repos/post';

export interface CostManagerInterface {
    findAll(): Promise<PostInterface[]>;

    create(post: PostInterface): Promise<boolean>;

    findById(id: number): Promise<PostInterface>;

    update(id: number, post: PostInterface): Promise<boolean>;

    delete(id: number): Promise<boolean>;
}

