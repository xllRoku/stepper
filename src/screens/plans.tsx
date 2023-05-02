import styled from 'styled-components';
import { Plan } from '../api';
import { Flex, Padding, Text } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { useChangePlan, useFetch } from '../hooks';
import Spinner from '../spinner';
import { colors } from '../colors';
import { SwitchAnnuality } from '../components';
import * as api from '../api';

type PlanObject = {
	plan: Plan;
};

const PlanButton = styled.button<{ selected: boolean }>`
	flex: 1;
	height: 10rem;
	border-radius: 0.5rem;
	border: 1px solid ${colors.PurplishBlue};
	background: ${props =>
		props.selected ? `${colors.PastelBlue}` : 'transparent'};
	cursor: pointer;
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
						<Text
							color={`${colors.MarineBlue}`}
							fontWeight='bold'
							textTransform='capitalize'
						>
							{title}
						</Text>
						<span>${price}/mo</span>
					</div>
				</Flex>
			</Padding>
		</PlanButton>
	);
};

const Plans = () => {
	const { data, loading } = useFetch(api.getPlan);

	return (
		<Flex
			width='100%'
			flexDirection='column'
			gap='2rem'
			justifyContent='center'
		>
			<If predicate={loading}>
				<Then predicate>
					<div style={{ height: '160px' }}>
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
