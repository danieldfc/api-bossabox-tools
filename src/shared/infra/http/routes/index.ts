import { Router } from 'express';

import toolRoutes from '@modules/tools/infra/http/routes/tools.routes';

const routes = Router();

routes.use('/tools', toolRoutes);

export default routes;
