import { colors } from '../colors';
import { Flex, Margin, Text } from '../custom.styled.components';
import { When } from '../functional.component';
import { useButton } from '../hooks';
import { useStepStore } from '../store/store';
import { GoBack, NextStep, StepContent, StepSpan, StepTitle } from './atoms';

type Step = {
	id: string;
	stepNumber: string;
	title: string;
	url?: string;
};

type StepObject = {
	step: Step;
};

export const Step: React.FC<StepObject> = ({ step }) => {
	const { step: currentStep } = useStepStore();
	const { id, stepNumber, title } = step;

	const isCurrentStep = currentStep === Number(id);

	return (
		<li key={id}>
			<Flex alignItems='center' gap='1.5rem'>
				<StepSpan selected={isCurrentStep}>
					<Flex
						width='100%'
						height='100%'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
					>
						{stepNumber}
					</Flex>
				</StepSpan>
				<StepContent>
					<Text
						fontSize='1rem'
						fontWeight={100}
						textTransform='uppercase'
						color={`${colors.White}`}
					>
						step {stepNumber}
					</Text>
					<StepTitle>{title} </StepTitle>
				</StepContent>
			</Flex>
		</li>
	);
};

export const Buttons = () => {
	const { step, nextStep, prevStep, showBack, showNext } = useButton();

	return (
		<Flex justifyContent={`${showBack ? 'space-between' : 'flex-end'}`}>
			<Margin
				width='100%'
				height='100%'
				media={{
					'@media (min-width: 1200px)': {
						marginBottom: '1rem'
					}
				}}
			>
				<GoBack
					onClick={prevStep}
					style={{ display: `${showBack ? 'block' : 'none'}` }}
				>
					go back
				</GoBack>
			</Margin>
			<Margin
				media={{
					'@media (min-width: 1200px)': {
						marginBottom: '1rem'
					}
				}}
			>
				<NextStep
					onClick={nextStep}
					style={{
						display: `${showNext ? 'block' : 'none'}`,
						background: `${
							step !== 3
								? `${colors.MarineBlue}`
								: `${colors.PurplishBlue}`
						}`
					}}
				>
					<When predicate={step !== 3}>next step</When>
					<When predicate={step === 3}>confirm</When>
				</NextStep>
			</Margin>
		</Flex>
	);
};
