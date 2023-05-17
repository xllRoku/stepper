import thk from '../assets/images/icon-thank-you.svg';
import styled from 'styled-components';
import { Flex, Margin, Padding } from '../custom.styled.components';
import { Annuality, Header } from '../components';
import { colors } from '../colors';
import { ANNUALITY } from '../constans';
import { When } from '../functional.component';
import { useGetTotal } from '../hooks';
import { useStepStore } from '../store';

const Link = styled.a`
	background: transparent;
	border-bottom: 2px solid black;
	cursor: pointer;
	color: ${colors.PurplishBlue};
`;

const Summary = () => {
	const { confirm } = useStepStore();

	return <>{confirm ? <Confirm /> : <TotalScreen />}</>;
};

const TotalScreen = () => {
	const { annuality, data, move, addons, plan } = useGetTotal();

	return (
		<div>
			<Header
				title='Finishing up'
				text='Double-check everything looks OK before confirming.'
			/>
			<section
				style={{
					background: `${colors.Magnolia}`,
					borderRadius: '.5rem'
				}}
			>
				<Margin width='100%' height='100%' marginTop='2.5rem'>
					<Padding width='100%' height='100%' padding='1.5rem'>
						<Margin width='100%' height='100%' marginBottom='2rem'>
							<Flex
								width='100%'
								height='100%'
								flexDirection='row'
								justifyContent='space-between'
							>
								<div>
									<p
										style={{
											color: `${colors.MarineBlue}`,
											fontWeight: 'bold',
											textTransform: 'capitalize'
										}}
									>
										{plan?.title} ({annuality})
									</p>
									<Margin marginTop='.5rem'>
										<Link onClick={move}>Change</Link>
									</Margin>
								</div>
								<span
									style={{
										color: `${colors.MarineBlue}`,
										fontWeight: 'bold'
									}}
								>
									${plan?.price}
									<Annuality
										annuality={annuality}
										key={annuality}
									/>
								</span>
							</Flex>
						</Margin>
						<Margin width='100%' height='100%' marginTop='2rem'>
							<Flex
								width='100%'
								height='100%'
								flexDirection='column'
								gap='1rem'
							>
								{addons.map(addon => (
									<div>
										<Flex
											width='100%'
											height='100%'
											justifyContent='space-between'
										>
											<p>{addon.title}</p>
											<span>
												+${addon.price}
												<Annuality
													annuality={annuality}
													key={annuality}
												/>
											</span>
										</Flex>
									</div>
								))}
							</Flex>
						</Margin>
					</Padding>
				</Margin>
			</section>
			<Padding width='100%' height='100%' padding='1.5rem'>
				<Flex width='100%' height='100%' justifyContent='space-between'>
					<p>
						Total{' '}
						<When predicate={annuality === ANNUALITY.MONTHLY}>
							(per month)
						</When>
						<When predicate={annuality === ANNUALITY.YEARLY}>
							(per year)
						</When>
					</p>
					<span
						style={{
							color: `${colors.PurplishBlue}`,
							fontWeight: 'bold',
							fontSize: '1.2rem'
						}}
					>
						${data?.data}
						<Annuality annuality={annuality} />
					</span>
				</Flex>
			</Padding>
		</div>
	);
};

const Confirm = () => {
	return (
		<Flex
			width='100%'
			height='100%'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			gap='1rem'
		>
			<img src={thk} />
			<h1
				style={{
					color: `${colors.MarineBlue}`,
					fontWeight: 'bold',
					fontSize: '2rem'
				}}
			>
				Thank you!
			</h1>
			<p style={{ textAlign: 'center' }}>
				Thanks for confirming your subscription! We hope you have fun
				using or plaform. If you ever need support, please feel free to
				email us at support@loremgaming.com.
			</p>
		</Flex>
	);
};

export default Summary;
