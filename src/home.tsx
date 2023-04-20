import bg from './assets/images/bg-sidebar-desktop.svg';
import { STEPS } from './constans';
import { Else, If, Then } from './functional.component';
import {
	Container,
	Bg,
	ButtonPlan,
	ContainerStep,
	Padding,
	StepContainer,
	StepContainers,
	StepContent,
	StepP,
	StepTitle,
	StepSpan,
	ContainerButton,
	Title,
	TitlePlan,
	PricePlan,
	ButtonInfo,
	Description,
	HeaderContent
} from './home.components';
import { usePlans } from './hooks';

interface IPlan {
	id: string;
	title: string;
	image: string;
	price: number;
}

interface IPlanObject {
	plan: IPlan;
}

interface IStep {
	id: string;
	stepNumber: string;
	title: string;
	url?: string;
}

interface IStepObject {
	step: IStep;
}

const Home = () => {
	const { data, loading } = usePlans();
	return (
		<Container>
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
			<main>
				<header>
					<HeaderContent>
						<Title>Select your plan</Title>
						<Description>
							You have the option of monthly of yearly billing.
						</Description>
					</HeaderContent>
				</header>
				<div>
					<ContainerButton>
						<If predicate={loading}>
							<Then predicate>
								<p style={{ color: 'red' }}>loading...</p>
							</Then>
							<Else predicate>
								{data.map(p => (
									<Plan key={p.id} plan={p} />
								))}
							</Else>
						</If>
					</ContainerButton>
				</div>
			</main>
		</Container>
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

const Plan: React.FC<IPlanObject> = ({ plan }) => {
	const { image, price, title } = plan;
	return (
		<ButtonPlan>
			<img src={image} alt='' />
			<ButtonInfo>
				<TitlePlan> {title} </TitlePlan>
				<PricePlan>${price}/mo</PricePlan>
			</ButtonInfo>
		</ButtonPlan>
	);
};

export default Home;
