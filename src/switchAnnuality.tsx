import { colors } from './colors';
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
				<SwitchContainer>
					<Circle onClick={handleOnClick} isSelected={isSelected} />
				</SwitchContainer>
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
