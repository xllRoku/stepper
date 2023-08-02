import bg from '@assets/images/bg-sidebar-desktop.svg';
import bgMobile from '@assets/images/bg-sidebar-mobile.svg';
import { Step } from './components';
import {
	ContainerStep,
	Dimension,
	LdsRing,
	LdsRingChild,
	StepContainers
} from './atoms';
import { Grid, Margin, Padding, Text } from '../custom.styled.components';
import { ANNUALITY, STEPS } from '../constans';
import { colors } from '@shared/colors';
import { When } from '@shared/functional.component';

const Steps = () => {
	return (
		<ContainerStep>
			<picture>
				<source srcSet={bg} media='(min-width:1200px)' />
				<img src={bgMobile} alt='' />
			</picture>
			<StepContainers>
				<Padding
					width='100%'
					height='100%'
					paddingTop='3rem'
					paddingInline='2rem'
					media={{
						'@media (min-width: 1200px)': {
							paddingTop: '2rem'
						}
					}}
				>
					<Grid
						gap='1rem'
						justifyContent='center'
						gridTemplateColumns='repeat(3, 2.8rem)'
						media={{
							'@media (min-width: 1200px)': {
								gridTemplateColumns: 'none',
								gap: '2rem'
							}
						}}
					>
						{STEPS.map(s => (
							<Step key={s.id} step={s} />
						))}
					</Grid>
				</Padding>
			</StepContainers>
		</ContainerStep>
	);
};

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

export { Steps };
