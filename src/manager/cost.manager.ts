import {PostInterface} from '../repos/post';
import {CostManagerInterface} from '../interfaces/cost.manager.interface';
import {inject, injectable} from 'inversify';
import TYPES from '../types';
import {CostRepositoryInterface} from '../interfaces/cost.repository.interface';

@injectable()
export class CostManager implements CostManagerInterface {
    @inject(TYPES.CostRepositoryImpl) private repo: CostRepositoryInterface;
    constructor(@inject(TYPES.CostRepositoryImpl) repo: CostRepositoryInterface) {
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
