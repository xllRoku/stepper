import { colors } from './colors';
import {
	Buttons,
	Header,
	HomeContainer,
	Steps,
	SwitchAnnuality
} from './components';
import { Flex, Padding } from './custom.styled.components';
import styled from 'styled-components';
import { usePlans } from './hooks';
import { Else, If, Then } from './functional.component';
import Spinner from './spinner';
import { Plan } from './api';
import { useAuth } from './context/auth-contenxt';

type PlanObject = {
	plan: Plan;
};

const PlanButton = styled.button`
	width: 8rem;
	height: 10rem;
	border-radius: 0.5rem;
	border: 1px solid ${colors.PurplishBlue};
	background: transparent;
	cursor: pointer;
`;

const Title = styled.p`
	color: ${colors.MarineBlue};
	font-weight: bold;
	text-transform: capitalize;
`;

const Img = styled.img`
	width: 3rem;
`;

const Logout = styled.button`
	width: 4rem;
	height: 2rem;
	text-transform: capitalize;
	background: ${colors.MarineBlue};
	border: none;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0.5rem;
`;

const Position = styled.div`
	position: absolute;
	right: 30px;
	top: 10px;
`;

const PlanComponent = ({ plan }: PlanObject) => {
	const { image, title, price } = plan;

	return (
		<PlanButton>
			<Padding
				width='100%'
				height='100%'
				paddingInline='0.5rem'
				paddingBlock='1rem'
			>
				<Flex
					width='100%'
					height='100%'
					flexDirection='column'
					justifyContent='space-between'
					alignItems='start'
				>
					<Img src={image} alt='' />
					<div style={{ textAlign: 'start' }}>
						<Title>{title}</Title>
						<span>${price}/mo</span>
					</div>
				</Flex>
			</Padding>
		</PlanButton>
	);
};

const Plans = () => {
	const { data, loading } = usePlans();

	return (
		<Flex
			width='100%'
			flexDirection='column'
			gap='2rem'
			justifyContent='center'
		>
			<If predicate={loading}>
				<Then predicate>
					<div style={{ width: '416px', height: '160px' }}>
						<Spinner widht='3rem' height='3rem' />
					</div>
				</Then>
				<Else predicate>
					<Flex gap='1rem'>
						{data.map(p => (
							<PlanComponent key={p.id} plan={p} />
						))}
					</Flex>
				</Else>
			</If>
			<SwitchAnnuality />
		</Flex>
	);
};

const AuthenticatedApp = () => {
	const { logout } = useAuth();

	return (
		<HomeContainer>
			<Position>
				<Logout onClick={logout}>log out</Logout>
			</Position>
			<Padding
				width='100%'
				height='100%'
				padding='1rem'
				paddingRight='7rem'
			>
				<Flex gap='7rem'>
					<Steps />
					<main>
						<Flex
							width='100%'
							height='100%'
							flexDirection='column'
							justifyContent='space-between'
						>
							<Header />
							<section>
								<Plans />
							</section>
							<Buttons />
						</Flex>
					</main>
				</Flex>
			</Padding>
		</HomeContainer>
	);
};

export default AuthenticatedApp;
