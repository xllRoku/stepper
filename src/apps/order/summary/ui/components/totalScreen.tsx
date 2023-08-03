import { useGetTotal } from '../../hooks';
import { colors } from '@shared/colors';
import { Flex, Margin, Padding } from '@shared/custom.styled.components';
import { Link } from '../atoms/atoms';
import { When } from '@shared/functional.component';
import { ANNUALITY } from '@shared/constans';
import { Annuality, Header } from '@shared/ui/molecules';

export const TotalScreen = () => {
	const { annuality, total, move, addons, plan } = useGetTotal();

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
						${total}
						<Annuality annuality={annuality} />
					</span>
				</Flex>
			</Padding>
		</div>
	);
};
