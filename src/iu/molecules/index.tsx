import { ReactNode } from 'react';
import bg from '../../assets/images/bg-sidebar-desktop.svg';
import bgMobile from '../../assets/images/bg-sidebar-mobile.svg';
import { ContainerStep, Input, Label, StepContainers } from '../atoms';
import { Flex, Grid, Padding } from '../../shared/custom.styled.components';
import { STEPS } from '../../shared/constans';
import { Step } from '../components';

const InputPassword: React.FC<Input> = ({ name, value, icon }) => {
	return (
		<Label>
			<Padding
				width='100%'
				height='100%'
				paddingInline='1rem'
				paddingBlock='0.5rem'
			>
				<Flex justifyContent='center' gap='0.5rem'>
					{icon}
					<Input
						placeholder={name}
						name={name}
						value={value}
						type='password'
					/>
				</Flex>
			</Padding>
		</Label>
	);
};

const InputText: React.FC<Input> = ({ name, value, icon }) => {
	return (
		<Label>
			<Padding
				width='100%'
				height='100%'
				paddingInline='1rem'
				paddingBlock='0.5rem'
			>
				<Flex justifyContent='center' gap='0.5rem'>
					{icon}
					<Input placeholder={name} name={name} value={value} />
				</Flex>
			</Padding>
		</Label>
	);
};

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

type Input = {
	name: string;
	value?: string;
	icon: ReactNode;
};

export { InputPassword, InputText, Steps };
