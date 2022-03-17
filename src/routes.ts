import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryMan/CreateDeliveryManController';
import { AuthenticateDeliveryManController } from './modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './modules/middlewares/ensureAuthenticateClient';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createDeliveryController = new CreateDeliveryController()

routes.post('/create/client', createClientController.handle);
routes.post('/authenticate/client', authenticateClientController.handle);
routes.post('/create/deliveryman', createDeliveryManController.handle);
routes.post('/authenticate/deliveryman', authenticateDeliveryManController.handle);
routes.post('/create/delivery', ensureAuthenticateClient, createDeliveryController.handle);

export { routes };