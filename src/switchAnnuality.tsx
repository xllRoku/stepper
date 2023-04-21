import { colors } from './colors';
import { Flex, Padding } from './functional.component';
import { useSwitchAnnuality } from './hooks';
import {
	Align,
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
		<Align>
			<Monthly
				style={{
					color: `${isMonthly ? colors.MarineBlue : colors.LightGray}`
				}}
			>
				monthly
			</Monthly>
			<SwitchDiv>
				<Padding paddingInline='0.5rem'>
					<Flex width='100%' height='100%' alignItems='center'>
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
					color: `${isYearly ? colors.MarineBlue : colors.LightGray}`
				}}
			>
				yearly
			</Yearly>
		</Align>
	);
};

export { SwitchAnnuality };
