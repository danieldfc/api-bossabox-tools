import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '@modules/tools/services/CreateToolService';
import DestroyToolService from '@modules/tools/services/DestroyToolService';
import ListToolService from '@modules/tools/services/ListToolService';

export default class ToolsController {
  async index(request: Request, response: Response): Promise<Response> {
    const listToolService = container.resolve(ListToolService);

    const tools = await listToolService.execute();

    return response.json(tools);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title, description, link, tags } = request.body;

    const createToolService = container.resolve(CreateToolService);

    const tool = await createToolService.execute({
      title,
      description,
      link,
      tags,
    });

    return response.status(201).json(tool);
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const destroyToolService = container.resolve(DestroyToolService);

    await destroyToolService.execute({ id: Number(id) });

    return response.status(204).send();
  }
}
