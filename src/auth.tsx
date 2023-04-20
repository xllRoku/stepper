import obv from './assets/images/obvli.jpg';
import { useState, FormEvent, useCallback } from 'react';
import axios from 'axios';
import {
	Button,
	Center,
	ContainerForm,
	Form,
	H1Form,
	InputPassword,
	InputText,
	ObvImage,
	ObvImageForm,
	Password,
	User
} from './auth.components';
import { useNavigate } from '@tanstack/react-location';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: '',
		password: ''
	});

	const handleOnChange = useCallback((event: any) => {
		const { name, value } = event.target;
		setData(prevData => ({ ...prevData, [name]: value }));
	}, []);

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		const url = 'http://localhost:3000';
		const endpoint = 'user/register';
		axios
			.post(`${url}/${endpoint}`, {
				email: data.email,
				password: data.password
			})
			.then(res => console.log(res.data))
			.catch(err => console.log(err.response?.data.errorMessage));

		navigate({ to: '/dashboard' });
	};
	return (
		<Form onSubmit={handleOnSubmit}>
			<Center>
				<H1Form>user login</H1Form>
				<InputText
					icon={<User />}
					name={FORM_NAMES.EMAIL}
					handleOnChnage={handleOnChange}
				/>
				<InputPassword
					icon={<Password />}
					name={FORM_NAMES.PASSWORD}
					handleOnChnage={handleOnChange}
				/>
				<Button>sign up</Button>
			</Center>
		</Form>
	);
};

const SingUp = () => {
	return (
		<>
			<ObvImage src={obv} />
			<ContainerForm>
				<ObvImageForm src={obv} />
				<FormSignup />
			</ContainerForm>
		</>
	);
};

export default SingUp;
