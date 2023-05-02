import obv from './assets/images/obvli.jpg';
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
} from './components';
import { useAuth } from './context/auth-contenxt';
import { Grid, Padding } from './custom.styled.components';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	// const { register } = useAuth();

	return (
		<Form>
			<Padding paddingInline='6rem' paddingBlock='1rem'>
				<Grid gridPlaceItems='center' gap='1rem'>
					<H1Form>user login</H1Form>
					<InputText icon={<User />} name={FORM_NAMES.EMAIL} />
					<InputPassword
						icon={<Password />}
						name={FORM_NAMES.PASSWORD}
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

const UnauthenticatedApp = () => {
	return (
		<Container>
			<Grid gridPlaceItems='center' height='100%'>
				<SingUp />
			</Grid>
		</Container>
	);
};

export default UnauthenticatedApp;
