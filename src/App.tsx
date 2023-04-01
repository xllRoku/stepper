import { FormEvent, useState } from 'react';
import axios from 'axios';
import obv from './assets/images/obvli.jpg';
import {
	Button,
	Center,
	Container,
	ContainerForm,
	Form,
	H1Form,
	InputText,
	ObvImage,
	ObvImageForm,
	Password,
	User
} from './components';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

function App() {
	const [data, setData] = useState({
		email: '',
		password: ''
	});

	const handleOnChange = (event: any) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value
		});
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		const url = 'http://localhost:3000';
		const endpoint = 'user/register';
		axios
			.post(`${url}/${endpoint}`, {
				email: data.email,
				password: data.password
			})
			.then(res => console.log(res.data));
	};

	return (
		<Container>
			<ObvImage src={obv} />
			<ContainerForm>
				<ObvImageForm src={obv} />
				<Form onSubmit={handleOnSubmit}>
					<Center>
						<H1Form>user login</H1Form>
						<InputText
							icon={<User />}
							name={FORM_NAMES.EMAIL}
							handleOnChnage={handleOnChange}
						/>
						<InputText
							icon={<Password />}
							name={FORM_NAMES.PASSWORD}
							handleOnChnage={handleOnChange}
						/>
						<Button>sign in</Button>
					</Center>
				</Form>
			</ContainerForm>
		</Container>
	);
}

export default App;
