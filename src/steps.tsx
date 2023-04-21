import bg from './assets/images/bg-sidebar-desktop.svg';
import { STEPS } from './constans';
import { Flex, Grid } from './functional.component';
import {
	Bg,
	ContainerStep,
	Padding,
	StepContainers,
	StepContent,
	StepP,
	StepSpan,
	StepTitle
} from './steps.components';

interface IStep {
	id: string;
	stepNumber: string;
	title: string;
	url?: string;
}

interface IStepObject {
	step: IStep;
}

const Steps = () => {
	return (
		<ContainerStep>
			<Bg src={bg} />
			<StepContainers>
				<Padding>
					<Grid gap='2rem'>
						{STEPS.map(s => (
							<Step key={s.id} step={s} />
						))}
					</Grid>
				</Padding>
			</StepContainers>
		</ContainerStep>
	);
};

const Step: React.FC<IStepObject> = ({ step }) => {
	const { id, stepNumber, title } = step;

	return (
		<li key={id}>
			<Flex alignItems='center' gap='1.5rem'>
				<StepSpan>
					<Flex
						width='100%'
						height='100%'
						flexDirection='column'
						justifyContent='center'
						alignItems='center
					'
					>
						{stepNumber}
					</Flex>
				</StepSpan>
				<StepContent>
					<StepP>{title}</StepP>
					<StepTitle>step {stepNumber} </StepTitle>
				</StepContent>
			</Flex>
		</li>
	);
};

export { Steps };
