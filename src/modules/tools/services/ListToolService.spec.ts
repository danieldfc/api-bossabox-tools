import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';

import ListToolService from './ListToolService';

let fakeToolsRepository: FakeToolsRepository;
let listToolService: ListToolService;

describe('ListToll', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();

    listToolService = new ListToolService(fakeToolsRepository);
  });

  it('should be able to list all tools', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'non-title',
      link: 'https://url',
      description: 'non-description',
      tags: ['node', 'organizing', 'webapps'],
    });

    expect(tool).toHaveProperty('id');

    const tools = await listToolService.execute();

    expect(tools).toEqual([tool]);
  });
});
