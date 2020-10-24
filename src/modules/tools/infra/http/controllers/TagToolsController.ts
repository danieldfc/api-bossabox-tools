import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListToolsForTagService from '@modules/tools/services/ListToolsForTagService';

export default class TagToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    const listToolsForTag = container.resolve(ListToolsForTagService);

    const tools = await listToolsForTag.execute({
      tag: String(tag),
    });

    return response.json(tools);
  }
}
