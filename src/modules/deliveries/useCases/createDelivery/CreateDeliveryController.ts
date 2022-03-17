import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
	async handle(req: Request, res: Response): Promise<any> {

		const { item_name } = req.body;
		const { id_client } = req;

		const createClientUseCase = new CreateDeliveryUseCase();
		const delivery = await createClientUseCase.execute({
			item_name,
			id_client
		});

		return res.json(delivery);
	}
}