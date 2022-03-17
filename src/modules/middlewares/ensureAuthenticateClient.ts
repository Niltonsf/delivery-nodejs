import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction): Promise<any>{
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).json({
		message: 'Authentication error!'
	});

	const [, token ] = authHeader.split(" "); 

	try {
		const { sub } = verify(token, 'bb1cb2bc415af18b5df0b0049c6dfb74') as IPayload;
		
		req.id_client = sub;

		return next();
	} catch (err) {
		return res.status(401).json({
			message: 'Invalid token!'
		});
	}
}