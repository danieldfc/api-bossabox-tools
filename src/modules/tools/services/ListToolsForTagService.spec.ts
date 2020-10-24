import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';

import ListToolsForTagService from './ListToolsForTagService';

let fakeToolsRepository: FakeToolsRepository;
let listToolsForTagService: ListToolsForTagService;

describe('ListToolsForTag', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    listToolsForTagService = new ListToolsForTagService(fakeToolsRepository);
  });

  it('should be able to list all tools', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    const tools = await listToolsForTagService.execute({
      tag: 'node',
    });

    expect(tools).toEqual([tool]);
  });

  it('should be able to list all tools same without informed tag', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    const tools = await listToolsForTagService.execute({
      tag: undefined,
    });

    expect(tools).toEqual([tool]);
  });
});
