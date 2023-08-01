import bg from '../../assets/images/bg-sidebar-desktop.svg';
import bgMobile from '../../assets/images/bg-sidebar-mobile.svg';
import { Step } from './components';
import { ContainerStep, StepContainers } from './atoms';
import { Grid, Padding } from '../custom.styled.components';
import { STEPS } from '../constans';

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

export { Steps };
