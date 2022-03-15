import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
	async handle(req: Request, res: Response): Promise<any> {

		const { username, password } = req.body;

		const authenticateClient = new AuthenticateClientUseCase();
		const result = await authenticateClient.execute({
			username,
			password
		});

		return res.json(result);
	}
}