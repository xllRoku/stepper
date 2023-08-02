import { Flex, Padding, Text } from '../shared/custom.styled.components';
import { Else, If, Then } from '../shared/functional.component';
import { colors } from '../shared/colors';
import { Annuality, Header, Spinner } from '../shared/molecules';
import { useGetPlans, usePlanManagement } from './hooks';
import { Img, PlanButton } from './ui/atoms';
import { PlanWithId } from './plans.models';
import { SwitchAnnuality } from '../annuality/annuality';
import { useEffect } from 'react';
import { annualityStore } from '../annuality/annuality.store';

function PlanComponent({ plan }: { plan: PlanWithId }) {
	const { addPlan, getPlan } = usePlanManagement();

	console.log(getPlan()?.id);

	return (
		<PlanButton
			onClick={() => addPlan(plan)}
			selected={getPlan()?.id === plan.id}
		>
			<Padding
				width='100%'
				height='100%'
				paddingInline='0.5rem'
				paddingBlock='1rem'
			>
				<Flex
					width='100%'
					height='100%'
					gap='1rem'
					alignItems='center'
					media={{
						'@media (min-width: 1200px)': {
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'start',
							gap: '0'
						}
					}}
				>
					<Img src={plan.image} alt='' />
					<div style={{ textAlign: 'start' }}>
						<Text
							color={`${colors.MarineBlue}`}
							fontWeight='bold'
							textTransform='capitalize'
						>
							{plan.title}
						</Text>
						<span
							style={{
								color: `${colors.CoolGray}`,
								fontWeight: 'bold'
							}}
						>
							${plan.price}
							<Annuality
								annuality={plan.annuality}
								key={plan.annuality}
							/>
						</span>
					</div>
				</Flex>
			</Padding>
		</PlanButton>
	);
}

function Plans() {
	const { annuality } = annualityStore();
	const { upgradePlan } = usePlanManagement();
	const { data, isLoading: loading } = useGetPlans();

	useEffect(() => {
		if (data) {
			upgradePlan(data);
		}
	}, [annuality, data]);

	return (
		<Flex
			width='100%'
			flexDirection='column'
			gap='2rem'
			justifyContent='center'
		>
			<Header
				title='Select Your plan'
				text='you have the option of monthly or yeary billing'
			/>
			<If predicate={loading}>
				<Then predicate>
					<div style={{ height: '11rem' }}>
						<Spinner
							width='3rem'
							height='3rem'
							borderColor='black'
						/>
					</div>
				</Then>
				<Else predicate>
					<Flex
						gap='1rem'
						flexDirection='column'
						media={{
							'@media (min-width: 1200px)': {
								flexDirection: 'row'
							}
						}}
					>
						{data?.map(plan => (
							<PlanComponent key={plan.id} plan={plan} />
						))}
					</Flex>
				</Else>
			</If>
			<SwitchAnnuality />
		</Flex>
	);
}

export default Plans;
