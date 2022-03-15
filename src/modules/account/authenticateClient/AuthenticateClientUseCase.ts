import prisma from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient {
	username: string;
	password: string;
}

export class AuthenticateClientUseCase {
	async execute({ username, password }: IAuthenticateClient) {
		// Verificar se username cadastrado
		const client = await prisma.clients.findFirst({
			where: {
				username
			}
		});

		if(!client) throw new Error("Username or password incorrect!");

		// Verificar senha
		const passwordMatch = await compare(password, client.password);

		if(!passwordMatch) throw new Error("Username or password incorrect!");

		// Gerar token
		const token = sign({ username }, 'bb1cb2bc415af18b5df0b0049c6dfb74', {
			subject: client.id,
			expiresIn: '1d'
		});

		return token;
	}
}