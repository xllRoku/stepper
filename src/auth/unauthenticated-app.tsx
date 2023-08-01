import { useState } from 'react';
import obv from '../assets/images/obvli.jpg';
import { Flex, Grid, Padding } from '../shared/custom.styled.components';
import { Else, If, Then, When } from '../shared/functional.component';
import { Spinner } from '../shared/molecules';
import {
	Button,
	ContainerForm,
	H1Form,
	ObvImage,
	ObvImageForm,
	PasswordIcon,
	Submit,
	UserIcon
} from './ui/atoms';
import { InputPassword, InputText } from './ui/molecules';
import { useAuth } from './hooks';
import { useNavigate } from 'react-router-dom';
import { User } from './auth';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

type Login = {
	onSubmit: (user: User) => void;
};

export const LoginForm: React.FC<Login> = ({ onSubmit }) => {
	const { getState } = useAuth();
	const navigate = useNavigate();

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email: string = event.currentTarget.email.value;
		const password: string = event.currentTarget.password.value;

		const user = {
			email,
			password
		};

		onSubmit(user);
		navigate('/plans');
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<Padding
				paddingInline='3rem'
				paddingBlock='1rem'
				media={{
					'@media (min-width: 1200px)': {
						paddingInline: '6rem'
					}
				}}
			>
				<Grid gridPlaceItems='center' gap='1rem'>
					<H1Form>user login</H1Form>
					<InputText icon={<UserIcon />} name={FORM_NAMES.EMAIL} />
					<InputPassword
						icon={<PasswordIcon />}
						name={FORM_NAMES.PASSWORD}
					/>
					<Button>
						<Flex
							width='100%'
							justifyContent='center'
							alignItems='center'
						>
							<When predicate={!getState().loading}>sign up</When>
							<When predicate={getState().loading}>
								<Spinner
									width='24px'
									height='24px'
									borderColor='white'
								/>
							</When>
						</Flex>
					</Button>
					<When predicate={getState().error && !getState().loading}>
						<p style={{ color: 'red' }}>{getState().error}</p>
					</When>
				</Grid>
			</Padding>
		</form>
	);
};

const UnauthenticatedApp = () => {
	const { login, register } = useAuth();
	const [which, setWhich] = useState(false);

	const handleOnClick = () => setWhich(!which);

	return (
		<>
			<ObvImage src={obv} />
			<ContainerForm>
				<ObvImageForm src={obv} />
				<If predicate={which}>
					<Then predicate>
						<LoginForm onSubmit={register} />
					</Then>
					<Else predicate>
						<LoginForm onSubmit={login} />
					</Else>
				</If>
				<Grid width='100%' gridPlaceItems='center'>
					<When predicate={which}>
						<span>do u have an account already?</span>
						<Submit onClick={handleOnClick}>log in</Submit>
					</When>
					<When predicate={!which}>
						<span>don't have an account yet?</span>
						<Submit onClick={handleOnClick}>register</Submit>
					</When>
				</Grid>
			</ContainerForm>
		</>
	);
};

export default UnauthenticatedApp;
