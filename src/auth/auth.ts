import axios from 'axios';
import { REGISTER_USER_ENDPOINT } from '../constans';

const registerUser = (data: { email: string; password: string }) =>
	axios
		.post(REGISTER_USER_ENDPOINT, {
			email: data.email,
			password: data.password
		})
		.then(res => console.log(res.data))
		.catch(err => console.log(err.response?.data.errorMessage));

export { registerUser };
