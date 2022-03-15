import prisma from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryMan {
	username: string;
	password: string;
}

export class AuthenticateDeliveryManUseCase {
	async execute({ username, password }: IAuthenticateDeliveryMan) {
		// Verificar se username cadastrado
		const deliveryMan = await prisma.deliveryMan.findFirst({
			where: {
				username
			}
		});

		if(!deliveryMan) throw new Error("Username or password incorrect!");

		// Verificar senha
		const passwordMatch = await compare(password, deliveryMan.password);

		if(!passwordMatch) throw new Error("Username or password incorrect!");

		// Gerar token
		const token = sign({ username }, '921cb2bc415a321318b5df0b0049c6dfb74', {
			subject: deliveryMan.id,
			expiresIn: '1d'
		});

		return token;
	}
}