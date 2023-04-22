import obv from '../assets/images/obvli.jpg';
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
import { useLogin } from '../hooks';
import { Flex, Grid, Padding } from '../custom.styled.components';
import { When } from '../functional.component';
import Spinner from '../spinner';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	const { handleOnChange, handleOnSubmit, loading, errors } = useLogin();

	console.log(errors);

	return (
		<Form onSubmit={handleOnSubmit}>
			<Padding paddingInline='6rem' paddingBlock='1rem'>
				<Grid gridPlaceItems='center' gap='1rem'>
					<H1Form>user login</H1Form>
					<InputText
						icon={<User />}
						name={FORM_NAMES.EMAIL}
						handleOnChnage={handleOnChange}
						error={errors}
					/>
					<InputPassword
						icon={<Password />}
						name={FORM_NAMES.PASSWORD}
						handleOnChnage={handleOnChange}
						error={errors}
					/>
					<Button>
						<When predicate={loading}>
							<Spinner />
						</When>
						<When predicate={!loading}>sign up</When>
					</Button>
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
