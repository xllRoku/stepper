import { authURL } from '@shared/constans';
import HttpService from '@shared/http';
import { AuthActions, AuthStore } from './auth.model';

export type User = {
	email: string;
	password: string;
};

class Auth {
	constructor(private authStore: AuthActions) {}

	setToken(token: AuthStore['token']) {
		this.authStore.update({
			token: token,
			loading: false,
			error: undefined
		});
	}

	startLoading() {
		this.authStore.update({
			...this.authStore.get(),
			loading: true
		});
	}

	setError(err: AuthStore['error']) {
		this.authStore.update({
			...this.authStore.get(),
			error: err,
			loading: false
		});
	}
}

export class AuthController {
	private httpService: HttpService;
	private auth: Auth;
	constructor(private authStore: AuthActions) {
		this.authStore = authStore;
		this.httpService = new HttpService(authURL);
		this.auth = new Auth(authStore);
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.getState = this.getState.bind(this);
		this.logout = this.logout.bind(this);
	}

	public getState() {
		return this.authStore.get();
	}

	public login(user: User) {
		this.auth.startLoading();
		this.httpService
			.post<{ token: string }>('/users/login', {
				email: user.email,
				password: user.password
			})
			.then(res => this.auth.setToken(res.token))
			.catch(err => {
				console.log(err.response.data?.errorMessage);
				this.auth.setError(err.response.data?.errorMessage);
			});
	}

	public register(user: User) {
		this.auth.startLoading();
		this.httpService
			.post<{ token: string }>('/users/login', {
				email: user.email,
				password: user.password
			})
			.then(res => this.auth.setToken(res.token))
			.catch(err => {
				this.auth.setError(err.response.data?.errorMessage);
			});
	}

	public logout() {
		this.authStore.update({ token: '', loading: false, error: '' });
	}
}
