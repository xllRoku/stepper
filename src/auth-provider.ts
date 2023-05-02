import axios from 'axios';
import { UserToken } from './context/auth-contenxt';

export type UserRegisterDto = {
	email: string;
	password: string;
};

const localStorageKey = '__auth_provider_token__';

async function getToken() {
	// if we were a real auth provider, this is where we would make a request
	// to retrieve the user's token. (It's a bit more complicated than that...
	// but you're probably not an auth provider so you don't need to worry about it).
	return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ data }: { data: UserToken }) {
	window.localStorage.setItem(localStorageKey, data.token);
	return data;
}

function register({ email, password }: UserRegisterDto): Promise<UserToken> {
	return client('user/register', { email, password }).then(
		handleUserResponse
	);
}

// an auth provider wouldn't use your client, they'd have their own
// so that's why we're not just re-using the client
const authURL = 'http://localhost:3000';

async function client(endpoint: string, data: Object) {
	return axios.post(`${authURL}/${endpoint}`, data);
}

export { getToken, register, localStorageKey };
