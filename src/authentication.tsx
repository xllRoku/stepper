import obv from './assets/images/obvli.jpg';
import { Outlet } from 'react-router-dom';
import {
	Button,
	Container,
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
import { Grid, Padding } from './functional.component';
import { useLogin } from './hooks';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	const { handleOnChange, handleOnSubmit } = useLogin();

	return (
		<Form onSubmit={handleOnSubmit}>
			<Padding paddingInline='6rem' paddingBlock='1rem'>
				<Grid gridPlaceItems='center' gap='1rem'>
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
				</Grid>
			</Padding>
		</Form>
	);
};

export const SingUp = () => {
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

const Auth = () => {
	return (
		<Container>
			<Grid gridPlaceItems='center' height='100%'>
				<Outlet />
			</Grid>
		</Container>
	);
};

export default Auth;
