import { Flex, Padding, Text } from '@shared/custom.styled.components';
import { usePlanManagement } from '../../hooks';
import { PlanWithId } from '../../plans.models';
import { Img, PlanButton } from '../atoms';
import { colors } from '@shared/colors';
import { Annuality } from '@shared/ui/molecules';

export function PlanCard({ plan }: { plan: PlanWithId }) {
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
