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
import { Grid, Padding } from './custom.styled.components';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
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
				<p>
					<Grid width='100%' gridPlaceItems='center'>
						<When predicate={which}>
							do u have an account already?
							<Submit onClick={handleOnClick}>log in</Submit>
						</When>
						<When predicate={!which}>
							don't have an account yet?
							<Submit onClick={handleOnClick}>register</Submit>
						</When>
					</Grid>
				</p>
			</ContainerForm>
		</>
	);
};

export default UnauthenticatedApp;
