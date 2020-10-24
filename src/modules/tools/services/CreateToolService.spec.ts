import AppError from '@shared/errors/AppError';
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

let fakeToolsRepository: FakeToolsRepository;
let createToolService: CreateToolService;

describe('CreateToolService', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    createToolService = new CreateToolService(fakeToolsRepository);
  });

  it('should be able to create a new tool', async () => {
    const tool = await createToolService.execute({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    expect(tool).toHaveProperty('id');
  });

  it('should not be able to create a new tool with same title another', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    expect(tool).toHaveProperty('id');
    await expect(
      createToolService.execute({
        title: 'non-title',
        link: 'https://url',
        description: 'non-description',
        tags: ['node', 'organizing', 'webapps'],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
