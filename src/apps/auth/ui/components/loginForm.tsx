import { useAuth } from '../../hooks';
import { User } from '../../auth.controller';
import { Flex, Grid, Padding } from '@shared/custom.styled.components';
import { Button, H1Form, PasswordIcon, UserIcon } from '../atoms';
import { InputPassword, InputText } from '../molecules';
import { When } from '@shared/functional.component';
import { Spinner } from '@shared/ui/molecules';
import { useNavigateTo } from '@shared/hooks';

export const LoginForm: React.FC<Login> = ({ onSubmit }) => {
	const {
		state: { error, loading }
	} = useAuth();
	const { navigate } = useNavigateTo();

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

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
					<InputText icon={<UserIcon />} name='email' />
					<InputPassword icon={<PasswordIcon />} name='password' />
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
					<When predicate={error && !loading}>
						<p style={{ color: 'red' }}>{error.message}</p>
					</When>
				</Grid>
			</Padding>
		</form>
	);
};

type Login = {
	onSubmit: (user: User) => void;
};
