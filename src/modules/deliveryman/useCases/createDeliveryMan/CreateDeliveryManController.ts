import { Request, Response } from 'express';
import { CreateDeliveryManUseCase } from './CreateDeliveryManUseCase';

export class CreateDeliveryManController {
	async handle(req: Request, res: Response): Promise<any> {

		const { username, password } = req.body;

		const createDeliveryUseCase = new CreateDeliveryManUseCase();
		const result = await createDeliveryUseCase.execute({
			username,
			password
		});

		return res.json(result);
	}
}