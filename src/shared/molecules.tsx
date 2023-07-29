import { colors } from './colors';
import { ANNUALITY } from './constans';
import { Margin, Text } from './custom.styled.components';
import { When } from './functional.component';
import { LdsRing, LdsRingChild } from './atoms';
import { Dimension } from './types';

export const Header = ({ title, text }: { title: string; text: string }) => {
	return (
		<header>
			<Margin width='100%' height='100%' marginTop='2rem'>
				<Text
					fontSize='2rem'
					fontWeight='bold'
					color={`${colors.MarineBlue}`}
				>
					{title}
				</Text>
				<Margin width='100%' height='100%' marginTop='1rem'>
					<Text color={`${colors.CoolGray}`}>{text}</Text>
				</Margin>
			</Margin>
		</header>
	);
};

export const Annuality = ({ annuality }: { annuality: string }) => {
	return (
		<>
			<When predicate={annuality === ANNUALITY.MONTHLY}>/mo</When>
			<When predicate={annuality === ANNUALITY.YEARLY}>/yr</When>
		</>
	);
};

export const Spinner = ({ height, width, borderColor }: Dimension) => {
	return (
		<LdsRing className='lds-ring'>
			<LdsRingChild
				height={height}
				width={width}
				borderColor={borderColor}
			></LdsRingChild>
			<LdsRingChild
				height={height}
				width={width}
				borderColor={borderColor}
			></LdsRingChild>
			<LdsRingChild
				height={height}
				width={width}
				borderColor={borderColor}
			></LdsRingChild>
			<LdsRingChild
				height={height}
				width={width}
				borderColor={borderColor}
			>
				{' '}
			</LdsRingChild>
		</LdsRing>
	);
};
