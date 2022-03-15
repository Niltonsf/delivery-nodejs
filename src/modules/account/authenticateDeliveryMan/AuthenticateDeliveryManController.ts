import { Request, Response } from 'express';
import { AuthenticateDeliveryManUseCase } from "./AuthenticateDeliveryManUseCase";

export class AuthenticateDeliveryManController {
	async handle(req: Request, res: Response): Promise<any> {

		const { username, password } = req.body;

		const authenticateDeliveryMan = new AuthenticateDeliveryManUseCase();
		const result = await authenticateDeliveryMan.execute({
			username,
			password
		});

		return res.json(result);
	}
}