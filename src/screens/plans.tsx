import styled from 'styled-components';
import { Plan } from '../api';
import { Flex, Padding } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { useChangePlan, usePlans } from '../hooks';
import Spinner from '../spinner';
import { colors } from '../colors';
import { SwitchAnnuality } from '../components';

type PlanObject = {
	plan: Plan;
};

const PlanButton = styled.button<{ selected: boolean }>`
	width: 8rem;
	height: 10rem;
	border-radius: 0.5rem;
	border: 1px solid ${colors.PurplishBlue};
	background: ${props =>
		props.selected ? `${colors.PastelBlue}` : 'transparent'};
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

const PlanComponent = ({ plan }: PlanObject) => {
	const { id, image, title, price } = plan;
	const { handleOnClick, isPlanSelected } = useChangePlan(id, title);

	return (
		<PlanButton onClick={handleOnClick} selected={isPlanSelected}>
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
						<Spinner
							widht='3rem'
							height='3rem'
							borderColor='black'
						/>
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

export default Plans;
