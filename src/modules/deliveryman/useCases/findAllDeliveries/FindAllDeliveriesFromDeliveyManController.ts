import { Request, Response } from "express";
import { FindAllDeliveriesFromDeliveyManUseCase } from "./FindAllDeliveriesFromDeliveyManUseCase";

export class FindAllDeliveriesFromDeliveyManController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_deliveryman } = req.body;

    const findAllDeliveriesFromDeliveryManUseCase =
      new FindAllDeliveriesFromDeliveyManUseCase();
    const result = await findAllDeliveriesFromDeliveryManUseCase.execute(
      id_deliveryman
    );

    return res.json(result);
  }
}
