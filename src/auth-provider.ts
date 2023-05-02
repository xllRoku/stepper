import axios from 'axios';

const localStorageKey = '__auth_provider_token__';

async function getToken() {
	// if we were a real auth provider, this is where we would make a request
	// to retrieve the user's token. (It's a bit more complicated than that...
	// but you're probably not an auth provider so you don't need to worry about it).
	return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ data }: any) {
	window.localStorage.setItem(localStorageKey, data.user);
	return data;
}

function login({ username, password }: any) {
	return client('login', { username, password }).then(res =>
		console.log(res)
	);
}

function register({ email, password }: any) {
	return client('user/register', { email, password }).then(
		handleUserResponse
	);
}

const authURL = 'http://localhost:3000';

async function client(endpoint: string, data: User) {
	return axios.post(`${authURL}/${endpoint}`, data);
}

export { getToken, login, register, logout, localStorageKey };
