import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate
} from 'class-validator'

import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint'

export class RegisterDto {
	@IsString({ message: 'Имя должен быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
	name: string

	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязательный для заполнения.' })
	email: string

	@IsString({ message: 'Пароль должен быть строкой.' })
	@IsNotEmpty({ message: 'Пароль обязательный для заполнения.' })
	@MinLength(6, { message: 'Минимальная длина пароля 6 символов.' })
	password: string

	@IsString({ message: 'Подтверждение пароля должно быть строкой.' })
	@IsNotEmpty({ message: 'Поле подтверждения пароля не может быть пустым' })
	@MinLength(6, {
		message: 'Пароль подтверждения должен содержать не менее 6 символов'
	})
	@Validate(IsPasswordsMatchingConstraint, {
		message: 'Пароли не совпадают'
	})
	passwordRepeat: string
}
