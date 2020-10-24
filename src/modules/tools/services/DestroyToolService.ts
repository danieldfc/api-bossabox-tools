import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IToolsRepository from '../repositories/IToolsRepository';

interface IRequestDTO {
  id: number;
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ id }: IRequestDTO): Promise<void> {
    const findTool = await this.toolsRepository.findById(id);

    if (!findTool) {
      throw new AppError('Tool not found');
    }

    await this.toolsRepository.destroy(findTool);
  }
}

export default CreateToolService;
