import {PostManagerInterface} from '../interfaces/post.manager.interface';
import {inject, injectable} from 'inversify';
import {PostInterface} from '../repos/post';
import TYPES from '../types';
import {PostRepositoryInterface} from '../interfaces/post.repository.interface';

@injectable()
export class PostManager implements PostManagerInterface {
    private repo: PostRepositoryInterface;

    constructor(@inject(TYPES.PostRepositoryImpl) repo: PostRepositoryInterface) {
        this.repo = repo;
    }

    create(post: PostInterface): Promise<boolean> {
        return this.repo.create(post);
    }

    delete(id: number): Promise<boolean> {
        return this.repo.delete(id);
    }

    findAll(): Promise<PostInterface[]> {
        return this.repo.findAll();
    }

    findById(id: number): Promise<PostInterface> {
        return this.repo.findById(id);
    }

    update(id: number, post: PostInterface): Promise<boolean> {
        return this.repo.update(id, post);
    }

}
