import { useAuth } from '../../hooks';
import { User } from '@auth/auth.controller';
import { Flex, Grid, Padding } from '@shared/custom.styled.components';
import { Button, H1Form, PasswordIcon, UserIcon } from '../atoms';
import { InputPassword, InputText } from '../molecules';
import { When } from '@shared/functional.component';
import { Spinner } from '@shared/ui/molecules';
import { useNavigateTo } from '@shared/hooks';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

type Login = {
	onSubmit: (user: User) => void;
};

export const LoginForm: React.FC<Login> = ({ onSubmit }) => {
	const {
		state: { error, loading }
	} = useAuth();
	const { navigate } = useNavigateTo();

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
							<When predicate={!loading}>sign up</When>
							<When predicate={loading}>
								<Spinner
									width='24px'
									height='24px'
									borderColor='white'
								/>
							</When>
						</Flex>
					</Button>
					<When predicate={error && loading}>
						<p style={{ color: 'red' }}>{error.message}</p>
					</When>
				</Grid>
			</Padding>
		</form>
	);
};
