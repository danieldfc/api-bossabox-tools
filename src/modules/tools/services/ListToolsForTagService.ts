import { inject, injectable } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';

import IToolsRepository from '../repositories/IToolsRepository';

interface IRequestDTO {
  tag: string | undefined;
}

@injectable()
class ListToolsForTag {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ tag }: IRequestDTO): Promise<Tool[] | undefined> {
    if (!tag) {
      return this.toolsRepository.findAll();
    }

    const findTools = await this.toolsRepository.findByTag(tag);

    return findTools;
  }
}

export default ListToolsForTag;
