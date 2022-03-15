import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryMan/CreateDeliveryManController';
import { AuthenticateDeliveryManController } from './modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();

routes.post('/create/client', createClientController.handle);
routes.post('/authenticate/client', authenticateClientController.handle);
routes.post('/create/deliveryman', createDeliveryController.handle);
routes.post('/authenticate/deliveryman', authenticateDeliveryManController.handle);

export { routes };