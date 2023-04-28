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

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

type Login = {
	onSubmit: ({ email, password }: TypeUSer) => void;
};

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
			<Padding paddingInline='6rem' paddingBlock='1rem'>
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
								<Spinner />
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
	const [which, setWhich] = useState({
		which: false,
		loading: false
	});

	const handleOnClick = () => {
		setWhich({ ...which, loading: true });
		setTimeout(() => {
			setWhich({ ...which, which: !which });
		}, 1000);
		setWhich({ ...which, loading: false });
	};

	return (
		<>
			<ObvImage src={obv} />
			<ContainerForm>
				<ObvImageForm src={obv} />
				<If predicate={which.which}>
					<Then predicate>
						<If predicate={which.loading}>
							<Then predicate>
								<Spinner />
							</Then>
							<Else predicate>
								<LoginForm onSubmit={login} />
							</Else>
						</If>
					</Then>
					<Else predicate>
						<If predicate={which.loading}>
							<Then predicate>
								<Spinner />
							</Then>
							<Else predicate>
								<LoginForm onSubmit={login} />
							</Else>
						</If>
					</Else>
				</If>
				<button onClick={handleOnClick}>
					<When predicate={which.which}>
						Don't have an account yet?
						<span style={{ color: 'red' }}>register</span>
					</When>
					<When predicate={!which.which}>
						do u have an account already?
						<span style={{ color: 'red' }}>log in</span>
					</When>
				</button>
			</ContainerForm>
		</>
	);
};

export default UnauthenticatedApp;
