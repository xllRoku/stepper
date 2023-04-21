import obv from './assets/images/obvli.jpg';
import {
	Button,
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
import { Grid } from './functional.component';
import { useLogin } from './hooks';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	const { handleOnChange, handleOnSubmit } = useLogin();

	return (
		<Form onSubmit={handleOnSubmit}>
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
