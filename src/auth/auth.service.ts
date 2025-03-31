import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
	public async register(dto: RegisterDto) {}
	public async login() {}
	public async logout() {}
	public async saveSession() {}
}
