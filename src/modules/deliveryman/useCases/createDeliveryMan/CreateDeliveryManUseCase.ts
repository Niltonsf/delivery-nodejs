import prisma from '../../../../database/prismaClient';
import { hash } from "bcrypt";

interface ICreateDeliveryManUseCase {
	username: string;
	password: string;
}

export class CreateDeliveryManUseCase {
	async execute({ username, password }: ICreateDeliveryManUseCase) {
		// Verificar se usuario existe
		const deliveryManExists = await prisma.deliveryMan.findFirst({
			where: {
				username: {
					mode: "insensitive"
				}
			}
		});

		if (deliveryManExists) throw new Error("Delivery man already exists!");

		// Criptografar senha
		const hashPassword = await hash(password, 10);

		// Salvar o cliente
		const deliveryMan = await prisma.deliveryMan.create({
			data: {
				username,
				password: hashPassword
			}
		});

		return deliveryMan;
	}
}