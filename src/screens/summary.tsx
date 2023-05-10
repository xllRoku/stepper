import styled from 'styled-components';
import { Flex, Margin, Padding } from '../custom.styled.components';
import { useAddons, useAnnualityStore, useStore } from '../store';
import { Annuality, Header } from '../components';
import { colors } from '../colors';

const Container = styled.div``;

const Summary = () => {
	const { plan } = useStore();
	const { addons } = useAddons();
	const { annuality } = useAnnualityStore();
	return (
		<Container>
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
								<p
									style={{
										color: `${colors.MarineBlue}`,
										fontWeight: 'bold',
										textTransform: 'capitalize'
									}}
								>
									{plan?.title} ({annuality})
								</p>
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
		</Container>
	);
};

export default Summary;
