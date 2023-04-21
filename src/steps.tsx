import bg from './assets/images/bg-sidebar-desktop.svg';
import { STEPS } from './constans';
import {
	Bg,
	ContainerStep,
	Padding,
	StepContainer,
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
					{STEPS.map(s => (
						<Step key={s.id} step={s} />
					))}
				</Padding>
			</StepContainers>
		</ContainerStep>
	);
};

const Step: React.FC<IStepObject> = ({ step }) => {
	const { id, stepNumber, title } = step;

	return (
		<li key={id}>
			<StepContainer>
				<StepSpan>{stepNumber}</StepSpan>
				<StepContent>
					<StepP>{title}</StepP>
					<StepTitle>step {stepNumber} </StepTitle>
				</StepContent>
			</StepContainer>
		</li>
	);
};

export { Steps };
