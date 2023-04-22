import { REGISTER_USER_ENDPOINT } from '../constans';
import { post } from '../actions';

const registerUser = (data: { email: string; password: string }) =>
	post(REGISTER_USER_ENDPOINT, data).then(res => console.log(res.data));

// axios
// 	.post(REGISTER_USER_ENDPOINT, {
// 		email: data.email,
// 		password: data.password
// 	})
// 	.then(res => console.log(res.data))
// 	.catch(err => console.log(err.response?.data.errorMessage));

export { registerUser };
