import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../entities/Tool';

export default class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findAll(): Promise<Tool[]> {
    return this.ormRepository.find();
  }

  public async findById(id: number): Promise<Tool | undefined> {
    const findTool = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return findTool;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    const findToolsForTag = tools.filter(tool => {
      return tool.tags.includes(tag);
    });

    return findToolsForTag;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const findTool = await this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return findTool;
  }

  public async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({ title, link, description, tags });

    await this.ormRepository.save(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    return this.ormRepository.save(tool);
  }

  public async destroy(tool: Tool): Promise<void> {
    await this.ormRepository.remove(tool);
  }
}
