import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

import ICreateToolDTO from '../dtos/ICreateToolDTO';

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const findTool = await this.toolsRepository.findByTitle(title);

    if (findTool) {
      throw new AppError('Tool already exists');
    }

    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
