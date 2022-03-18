import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(req: Request, res: Response): Promise<any> {
    const findallWithoutEndDate = new FindAllAvailableUseCase();
    const deliveries = await findallWithoutEndDate.execute();

    return res.json(deliveries);
  }
}
