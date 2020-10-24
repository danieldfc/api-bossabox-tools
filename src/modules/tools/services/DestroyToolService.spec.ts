// import AppError from '@shared/errors/AppError';

import AppError from '@shared/errors/AppError';
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';

import DestroyToolService from './DestroyToolService';

let fakeToolsRepository: FakeToolsRepository;
let destroyToolService: DestroyToolService;

describe('DestroyTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    destroyToolService = new DestroyToolService(fakeToolsRepository);
  });

  it('should be able to destroy a tool', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    expect(tool).toHaveProperty('id');

    await destroyToolService.execute({
      id: tool.id,
    });
  });

  it('should not be able to destroy a tool not found', async () => {
    await expect(
      destroyToolService.execute({
        id: 9999,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
