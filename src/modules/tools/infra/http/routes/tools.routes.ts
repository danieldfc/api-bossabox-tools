import { Router } from 'express';

import TagToolsController from '../controllers/TagToolsController';
import ToolsController from '../controllers/ToolsController';

const toolRoutes = Router();

const toolsController = new ToolsController();
const tagToolsController = new TagToolsController();

toolRoutes.get('/', tagToolsController.index);

toolRoutes.get('/all', toolsController.index);
toolRoutes.post('/', toolsController.create);
toolRoutes.delete('/:id', toolsController.destroy);

export default toolRoutes;
