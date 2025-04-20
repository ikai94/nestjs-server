import { ConflictException, Injectable } from '@nestjs/common'
import { AutMethod, User } from '@prisma/__generated__'

import { UserService } from '@/user/user.service'

import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
	public constructor(private readonly userService: UserService) {}
	public async register(dto: RegisterDto) {
		const isExists = await this.userService.findByEmail(dto.email)

		if (isExists) {
			throw new ConflictException(
				'Регистрация не удалась. Пользователь с таким Email уже существует. Пожалуйста, используйте другой email или войдите в систему.'
			)
		}

		const newUser = await this.userService.create(
			dto.name,
			dto.password,
			dto.email,
			'',
			AutMethod.CREDENTIALS,
			false
		)

		return this.saveSession(newUser)
	}
	public async login() {}
	public async logout() {}
	public async saveSession(user: User) {
		console.log('Session saved. User: ', user)
	}
}
