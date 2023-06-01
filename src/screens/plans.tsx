<<<<<<< HEAD
import styled from 'styled-components';
import { PlanApi } from '../api';
import { Flex, Padding, Text } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { useChangePlan, useGetPlans } from '../hooks';
import Spinner from '../spinner';
import { colors } from '../colors';
import { Header, SwitchAnnuality } from '../components';
=======
import { Flex, Padding, Text } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { Plan, useChangePlan, useGetPlans } from '../hooks';
import { colors } from '../colors';
import { Img, PlanButton } from '../iu/atoms';
import { Annuality, Header, Spinner } from '../iu/molecules';
import { SwitchAnnuality } from '../iu/components';
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac

type PlanObject = {
	plan: PlanApi;
};

const PlanComponent = ({ plan }: PlanObject) => {
<<<<<<< HEAD
	const { _id, image, title, price } = plan;
	const { handleOnClick, isPlanSelected } = useChangePlan(_id, title, price);

	console.log(isPlanSelected);
=======
	const { id, image, title, price, annuality } = plan;
	const { handleOnClick, isPlanSelected } = useChangePlan(id, title, price);
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac

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
<<<<<<< HEAD
					<Flex gap='1rem'>
						{data?.map(p => (
							<PlanComponent key={p._id} plan={p} />
=======
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
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
						))}
					</Flex>
				</Else>
			</If>
			<SwitchAnnuality />
		</Flex>
	);
};

export default Plans;
