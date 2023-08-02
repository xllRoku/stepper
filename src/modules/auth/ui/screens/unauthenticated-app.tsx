import { useState } from 'react';
import obv from '@assets/images/obvli.jpg';
import { ContainerForm, ObvImage, ObvImageForm, Submit } from '../atoms';
import { useAuth } from '../../hooks';
import { Grid } from '@shared/custom.styled.components';
import { Else, If, Then, When } from '@shared/functional.component';
import { LoginForm } from '../components/loginForm';

const UnauthenticatedApp = () => {
	const {
		auth: { login, register }
	} = useAuth();
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
