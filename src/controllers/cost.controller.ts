import * as express from 'express';
import {inject} from 'inversify';
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces, request, response} from "inversify-express-utils";
import TYPES from '../types';
import {CostManagerInterface} from '../interfaces/cost.manager.interface';

@controller("/costs")
export class CostController implements interfaces.Controller {

    private manager: CostManagerInterface;

    constructor(@inject(TYPES.CostManagerInterface) manager: CostManagerInterface) {
        this.manager = manager;
    }

    @httpGet("/")
    public async httpGetCost(@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.manager.findAll();
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    @httpGet('/:id')
    public async getCost(@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.manager.findById(+req.params.id);
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    @httpPost('/')
    public async newCost(@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.manager.create(req.body);
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    @httpPut('/:id')
    public async updateUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.manager.update(+req.params.id, req.body);
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    @httpDelete('/:id')
    public async deleteUser(@request() req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.manager.delete(+req.params.id);
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}
