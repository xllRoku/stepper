import { colors } from '../../colors';
import { Flex, Margin, Padding } from '../../custom.styled.components';
import { useSwitchAnnuality } from '../../hooks';
import {
	Switch,
	Circle,
	Monthly,
	SwitchContainer,
	SwitchDiv,
	Yearly
} from './switch.components';

const SwitchAnnuality = () => {
	const { isSelected, handleOnClick, isMonthly, isYearly } =
		useSwitchAnnuality();

	return (
		<Switch>
			<Margin width='100%' height='100%' marginTop='2rem'>
				<Flex
					width='100%'
					height='100%'
					alignItems='center'
					justifyContent='center'
					gap='2rem'
				>
					<Monthly
						style={{
							color: `${
								isMonthly ? colors.MarineBlue : colors.LightGray
							}`
						}}
					>
						monthly
					</Monthly>
					<SwitchDiv>
						<Padding
							width='100%'
							height='100%'
							paddingInline='0.5rem'
						>
							<Flex
								width='100%'
								height='100%'
								alignItems='center'
							>
								<SwitchContainer>
									<Flex
										width='100%'
										height='100%'
										alignItems='center'
									>
										<Circle
											onClick={handleOnClick}
											isSelected={isSelected}
										/>
									</Flex>
								</SwitchContainer>
							</Flex>
						</Padding>
					</SwitchDiv>
					<Yearly
						style={{
							color: `${
								isYearly ? colors.MarineBlue : colors.LightGray
							}`
						}}
					>
						yearly
					</Yearly>
				</Flex>
			</Margin>
		</Switch>
	);
};

export { SwitchAnnuality };
