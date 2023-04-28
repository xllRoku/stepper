// pretend this is firebase, netlify, or auth0's code.
// you shouldn't have to implement something like this in your own app

import axios from 'axios';
import { Token, User } from './context/auth-contenxt';

const localStorageKey = '__auth_provider_token__';

async function getToken() {
	// if we were a real auth provider, this is where we would make a request
	// to retrieve the user's token. (It's a bit more complicated than that...
	// but you're probably not an auth provider so you don't need to worry about it).
	return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ data }: { data: Token }) {
	window.localStorage.setItem(localStorageKey, data.token);
	return data.token;
}

// function login({ email, password }: User) {
// 	return client('login', { email, password }).then(res => console.log(res));
// }

function register({ email, password }: User) {
	return client('users/register', { email, password }).then(
		handleUserResponse
	);
}

async function logout() {
	window.localStorage.removeItem(localStorageKey);
}

const authURL = 'http://localhost:3000';

async function client(endpoint: string, data: User) {
	return axios.post(`${authURL}/${endpoint}`, data);
}

export { getToken, register, logout, localStorageKey };
