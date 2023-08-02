import { useGetPlans, usePlanManagement } from '../../hooks';
import { useEffect } from 'react';
import { Flex } from '@shared/custom.styled.components';
import { Else, If, Then } from '@shared/functional.component';
import { PlanCard } from '../components/planCard';
import { Header, Spinner } from '@shared/ui/molecules';
import { SwitchAnnuality } from '../../../../order/annuality/ui/components/annuality';
import { annualityStore } from '../../../../order/annuality/context/annuality.store';

function Plan() {
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
							<PlanCard key={plan.id} plan={plan} />
						))}
					</Flex>
				</Else>
			</If>
			<SwitchAnnuality />
		</Flex>
	);
}

export default Plan;
