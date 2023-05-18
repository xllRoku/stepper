import { useState } from 'react';
import obv from './assets/images/obvli.jpg';
import {
	Button,
	ContainerForm,
	H1Form,
	InputPassword,
	InputText,
	ObvImage,
	ObvImageForm,
	Password,
	User
} from './components';
import { Flex, Grid, Padding } from './custom.styled.components';
import { Else, If, Then, When } from './functional.component';
import Spinner from './spinner';
import { User as TypeUSer, useAuth } from './context/auth-contenxt';
import styled from 'styled-components';
import { colors } from './colors';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

type Login = {
	onSubmit: ({ email, password }: TypeUSer) => void;
};

const Submit = styled.button`
	height: 2rem;
	text-transform: capitalize;
	border: none;
	background: none;
	cursor: pointer;
	color: ${colors.PurplishBlue};
	font-weight: bold;
`;

export const LoginForm: React.FC<Login> = ({ onSubmit }) => {
	const { error, isLoading } = useAuth();

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email: string = event.currentTarget.email.value;
		const password: string = event.currentTarget.password.value;

		onSubmit({ email, password });
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
					<InputText icon={<User />} name={FORM_NAMES.EMAIL} />
					<InputPassword
						icon={<Password />}
						name={FORM_NAMES.PASSWORD}
					/>
					<Button>
						<Flex
							width='100%'
							justifyContent='center'
							alignItems='center'
						>
							<When predicate={!isLoading}>sign up</When>
							<When predicate={isLoading}>
								<Spinner
									widht='24px'
									height='24px'
									borderColor='white'
								/>
							</When>
						</Flex>
					</Button>
					<When predicate={error && !isLoading}>
						<p style={{ color: 'red' }}>{error}</p>
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
