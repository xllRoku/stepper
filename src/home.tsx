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
	HeaderContent,
	SwitchDiv,
	SwitchContainer,
	Circle,
	Align,
	Monthly,
	Yearly,
	ButtonInfoSkeleton,
	TitlePlanSkeleton,
	PricePlanSkeleton,
	ButtonPlanSkeleton,
	ButtonImageSkeleton
} from './home.components';
import { usePlans } from './hooks';
import { useAnnualityStore, usePlanStore } from './store';
import { useState } from 'react';
import { ANNUALITY } from './constans';
import { colors } from './colors';

interface IPlan {
	id: string;
	title: string;
	image: string;
	price: number;
	annuality: string;
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
					<Plans />
					<SwitchPlan />
				</div>
			</main>
		</Container>
	);
};

const Plans = () => {
	const { data, loading } = usePlans();

	return (
		<ContainerButton>
			<If predicate={loading}>
				<Then predicate>
					<Skeleton />
				</Then>
				<Else predicate>
					{data.map(p => (
						<Plan key={p.id} plan={p} />
					))}
				</Else>
			</If>
		</ContainerButton>
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
	const store = usePlanStore();

	const isPlanSelected = store.plan?.title === title;

	return (
		<ButtonPlan
			isSelected={isPlanSelected}
			onClick={() =>
				store.setPlan({
					id: plan.id,
					title: plan.title,
					price: plan.price,
					annuality: plan.annuality
				})
			}
		>
			<img src={image} alt='' />
			<ButtonInfo>
				<TitlePlan> {title} </TitlePlan>
				<PricePlan>${price}/mo</PricePlan>
			</ButtonInfo>
		</ButtonPlan>
	);
};

const SwitchPlan = () => {
	const [isSelected, setIsSelected] = useState(false);
	const storeAnnuality = useAnnualityStore();

	const isMonthly = storeAnnuality.annuality === ANNUALITY.MONTHLY;
	const isYearly = storeAnnuality.annuality === ANNUALITY.YEARLY;

	const changeAnnuality = () =>
		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

	const handleOnClick = () => {
		setIsSelected(!isSelected);
		storeAnnuality.setAnnuality(changeAnnuality());
	};

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

const Skeleton = () => {
	const COUNTER = 3;

	return (
		<>
			{Array(COUNTER).fill(
				<ButtonPlanSkeleton>
					<ButtonImageSkeleton className='loader' />
					<ButtonInfoSkeleton>
						<TitlePlanSkeleton className='loader'></TitlePlanSkeleton>
						<PricePlanSkeleton className='loader'></PricePlanSkeleton>
					</ButtonInfoSkeleton>
				</ButtonPlanSkeleton>
			)}
		</>
	);
};

export default Home;
