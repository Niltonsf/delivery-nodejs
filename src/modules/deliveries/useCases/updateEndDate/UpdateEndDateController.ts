import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_deliveryman } = req;
    const { id: id_delivery } = req.params;

    const updateEndDate = new UpdateEndDateUseCase();
    const result = await updateEndDate.execute({
      id_deliveryman,
      id_delivery,
    });

    return res.json(result);
  }
}
