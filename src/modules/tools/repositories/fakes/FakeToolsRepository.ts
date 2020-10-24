import { uuid } from 'uuidv4';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '../IToolsRepository';

export default class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async findAll(): Promise<Tool[]> {
    return this.tools;
  }

  public async findById(id: number): Promise<Tool | undefined> {
    const findTool = this.tools.findIndex(tool => tool.id === id);

    const tool = this.tools[findTool];

    return tool;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const findTool = this.tools.findIndex(tool => tool.title === title);

    const tool = this.tools[findTool];

    return tool;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const findToolByTag = this.tools.filter(tool => {
      return tool.tags.includes(tag);
    });

    return findToolByTag;
  }

  public async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid(), title, link, description, tags });

    this.tools.push(tool);

    return tool;
  }

  public async save(tool: Tool): Promise<Tool> {
    const findIndex = this.tools.findIndex(findTool => findTool.id === tool.id);

    this.tools[findIndex] = tool;

    return tool;
  }

  public async destroy(tool: Tool): Promise<void> {
    const toolIndex = this.tools.findIndex(findTool => findTool.id === tool.id);

    this.tools.splice(toolIndex, 1);
  }
}
