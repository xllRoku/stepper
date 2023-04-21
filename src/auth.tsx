import obv from './assets/images/obvli.jpg';
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
import { useLogin } from './hooks';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const FormSignup = () => {
	const { handleOnChange, handleOnSubmit } = useLogin();

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
