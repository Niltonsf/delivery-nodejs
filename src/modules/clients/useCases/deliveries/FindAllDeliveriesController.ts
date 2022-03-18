import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id_client } = req.body;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const result = await findAllDeliveriesUseCase.execute(id_client);

    return res.json(result);
  }
}
