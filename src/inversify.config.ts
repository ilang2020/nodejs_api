import TYPES from './types';
import {Container} from 'inversify';
import {PostRepositoryImpl} from './repos/post.repository';
import {CostRepository} from './repos/cost.repository';
import {PostManager} from './manager/post.manager';
import {CostManager} from './manager/cost.manager';
import {CostManagerInterface} from './interfaces/cost.manager.interface';
import {PostManagerInterface} from './interfaces/post.manager.interface';

const container = new Container();

container.bind<CostManagerInterface>(TYPES.CostManagerInterface ).to(CostManager).inSingletonScope();
container.bind<PostManagerInterface>(TYPES.PostManagerInterface ).to(PostManager).inSingletonScope();

container.bind<PostRepositoryImpl>(TYPES.PostRepositoryImpl ).to(PostRepositoryImpl).inSingletonScope();
container.bind<CostRepository>(TYPES.CostRepositoryImpl ).to(CostRepository).inSingletonScope();


export default container;
