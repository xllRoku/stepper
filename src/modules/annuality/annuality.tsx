import { colors } from '../shared/colors';
import { Flex, Padding } from '../shared/custom.styled.components';
import { useSwitchAnnuality } from './hooks';
import {
	Circle,
	Monthly,
	Switch,
	SwitchContainer,
	SwitchDiv,
	Yearly
} from './ui/atoms';

export const SwitchAnnuality = () => {
	const { handleOnClick, isMonthly, annuality, isYearly } =
		useSwitchAnnuality();

	return (
		<Switch>
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
							isMonthly ? colors.MarineBlue : colors.CoolGray
						}`
					}}
				>
					monthly
				</Monthly>
				<SwitchDiv>
					<Padding width='100%' height='100%' paddingInline='0.5rem'>
						<Flex width='100%' height='100%' alignItems='center'>
							<SwitchContainer>
								<Flex
									width='100%'
									height='100%'
									alignItems='center'
								>
									<Circle
										onClick={handleOnClick}
										annuality={annuality}
									/>
								</Flex>
							</SwitchContainer>
						</Flex>
					</Padding>
				</SwitchDiv>
				<Yearly
					style={{
						color: `${
							isYearly ? colors.MarineBlue : colors.CoolGray
						}`
					}}
				>
					yearly
				</Yearly>
			</Flex>
		</Switch>
	);
};
