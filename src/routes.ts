import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateDeliveryManController } from "./modules/deliveryman/useCases/createDeliveryMan/CreateDeliveryManController";
import { AuthenticateDeliveryManController } from "./modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./modules/middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryMan } from "./modules/middlewares/ensureAuthenticateDeliveryMan";
import { UpdateDeliveryController } from "./modules/deliveries/useCases/updateDelivery/UpdateDeliveryController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesFromDeliveyManController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesFromDeliveyManController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController =
  new AuthenticateDeliveryManController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailable = new FindAllAvailableController();
const updateDeliveryController = new UpdateDeliveryController();
const findAllDeliveriesClient = new FindAllDeliveriesController();
const findAllDeliveryManDeliveries =
  new FindAllDeliveriesFromDeliveyManController();
const updateDeliveryEndDate = new UpdateEndDateController();

routes.post("/create/client", createClientController.handle);
routes.post("/authenticate/client", authenticateClientController.handle);
routes.post("/create/deliveryman", createDeliveryManController.handle);
routes.post(
  "/authenticate/deliveryman",
  authenticateDeliveryManController.handle
);
routes.post(
  "/create/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get(
  "/get/deliveries/available",
  ensureAuthenticateDeliveryMan,
  findAllAvailable.handle
);
routes.put(
  "/update/deliveries/:id",
  ensureAuthenticateDeliveryMan,
  updateDeliveryController.handle
);
routes.get(
  "/get/deliveries/client",
  ensureAuthenticateClient,
  findAllDeliveriesClient.handle
);
routes.get(
  "/get/deliveries/deliveryman",
  ensureAuthenticateDeliveryMan,
  findAllDeliveryManDeliveries.handle
);
routes.put(
  "/update/delivery/enddate/:id",
  ensureAuthenticateDeliveryMan,
  updateDeliveryEndDate.handle
);

export { routes };
