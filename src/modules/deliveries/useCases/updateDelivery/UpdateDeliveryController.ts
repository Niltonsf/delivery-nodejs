import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "./UpdateDeliveryUseCase";

export class UpdateDeliveryController {
  async handle(req: Request, res: Response): Promise<any> {
		const { id_deliveryman } = req;
		const { id: id_delivery } = req.params;

    const updateDeliveryMan = new UpdateDeliveryUseCase();
    const result = await updateDeliveryMan.execute({
			id_deliveryman,
			id_delivery
		});

    return res.json(result);
  }
}
