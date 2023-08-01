import axios from 'axios';
import { Token, User } from './auth-contenxt';

const localStorageKey = '__auth_provider_token__';
const authURL = 'http://localhost:3000';

async function getToken() {
	return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ data }: { data: Token }) {
	window.localStorage.setItem(localStorageKey, data.token);
	return data.token;
}

function login({ email, password }: User) {
	return client('users/login', { email, password }).then(handleUserResponse);
}

function register({ email, password }: User) {
	return client('users/register', { email, password }).then(
		handleUserResponse
	);
}

async function logout() {
	window.localStorage.removeItem(localStorageKey);
}

async function client(endpoint: string, data: User) {
	return axios.post(`${authURL}/${endpoint}`, data);
}

export { getToken, register, login, logout, localStorageKey };
