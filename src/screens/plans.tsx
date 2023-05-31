import { Flex, Padding, Text } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { Plan, useChangePlan, useGetPlans } from '../hooks';
import { colors } from '../colors';
import { Img, PlanButton } from '../iu/atoms';
import { Annuality, Header, Spinner } from '../iu/molecules';
import { SwitchAnnuality } from '../iu/components';

type PlanObject = {
	plan: Plan;
};

const PlanComponent = ({ plan }: PlanObject) => {
	const { id, image, title, price, annuality } = plan;
	const { handleOnClick, isPlanSelected } = useChangePlan(id, title, price);

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
					<Img src={image} alt='' />
					<div style={{ textAlign: 'start' }}>
						<Text
							color={`${colors.MarineBlue}`}
							fontWeight='bold'
							textTransform='capitalize'
						>
							{title}
						</Text>
						<span
							style={{
								color: `${colors.CoolGray}`,
								fontWeight: 'bold'
							}}
						>
							${price}
							<Annuality annuality={annuality} key={annuality} />
						</span>
					</div>
				</Flex>
			</Padding>
		</PlanButton>
	);
};

const Plans = () => {
	const { data, isLoading: loading } = useGetPlans();

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
						{data?.map(p => (
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
