import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from './colors';
import { Flex, Grid, Margin, Padding, Text } from './custom.styled.components';
import { STEPS } from './constans';
import bg from './assets/images/bg-sidebar-desktop.svg';
import { useSwitchAnnuality } from './hooks';
import { usePlanStore, useSetStep } from './store';
import { useNavigate } from 'react-router-dom';

type Input = {
	name: string;
	value?: string;
	icon: ReactNode;
};

export type Addon = {
	title: string;
	content: string;
	price: number;
	annuality: string;
};

type AddonObject = {
	addon: Addon;
};
type Step = {
	id: string;
	stepNumber: string;
	title: string;
	url?: string;
};

type StepObject = {
	step: Step;
};

type Switch = {
	isSelected?: boolean;
};

const Header = () => {
	return (
		<header>
			<header>
				<Margin width='100%' height='100%' marginTop='2rem'>
					<Text color={`${colors.MarineBlue}`}>Select your plan</Text>
					<Margin width='100%' height='100%' marginTop='1rem'>
						<Text color={`${colors.CoolGray}`}>
							You have the option of monthly of yearly billing.
						</Text>
					</Margin>
				</Margin>
			</header>
		</header>
	);
};

const User = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='user'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
		/>
	</svg>
);

const Password = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='password'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
		/>
	</svg>
);

const Container = styled.div`
	height: 100vh;
`;

const ObvImage = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	position: absolute;
	z-index: -1;
`;

const ObvImageForm = styled.img`
	width: 100%;
	height: 20rem;
`;

const ContainerForm = styled.div`
	background: white;
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	width: 100%;
	border-bottom: 3px solid black;
	border-radius: 100vh;
`;

const Input = styled.input`
	width: 100%;
	height: 2rem;
	border: none;
	border-radius: 100vh;
	&::placeholder {
		text-transform: capitalize;
		font-weight: bold;
	}
`;

const Button = styled.button`
	width: 8rem;
	height: 2.5rem;
	border-radius: 100vh;
	border: none;
	background: #78af89;
	border-bottom: 3px solid #2f4858;
	color: white;
	text-transform: capitalize;
	font-weight: bold;
	cursor: pointer;
`;

const H1Form = styled.h1`
	color: #00afa8;
`;

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

const HomeContainer = styled.div`
	background: white;
	border-radius: 1rem;
	position: relative;
	width: 900px;
`;

const GoBack = styled.button`
	width: 6rem;
	height: 3rem;
	background: transparent;
	border: none;
	color: ${colors.MarineBlue};
	font-weight: bold;
	text-transform: capitalize;
	cursor: pointer;
`;

const NextStep = styled.button`
	width: 6rem;
	height: 3rem;
	border-radius: 0.5rem;
	background: ${colors.MarineBlue};
	color: white;
	font-weight: bold;
	border: none;
	text-transform: capitalize;
	cursor: pointer;
`;

const ContainerStep = styled.div`
	border-radius: 0.5rem;
	position: relative;
`;

const StepContainers = styled.ol`
	width: 100%;
	position: absolute;
	top: 0;
`;

const StepSpan = styled.div<{ selected: boolean }>`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100vh;
	border: ${props => (props.selected ? 'none' : '2px solid white')};
	color: ${props => (props.selected ? 'hsl(213, 96%, 18%)' : 'white')};
	font-weight: bold;
	background: ${props =>
		props.selected ? 'hsl(228, 100%, 84%)' : 'transparent'};
`;

const StepContent = styled.div`
	flex: 1;
`;

const StepTitle = styled.h3`
	color: ${colors.White};
	text-transform: uppercase;
	font-size: 1rem;
`;

const Steps = () => {
	return (
		<ContainerStep>
			<img src={bg} />
			<StepContainers>
				<Padding
					width='100%'
					height='100%'
					paddingTop='2rem'
					paddingInline='2rem'
				>
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

const Step: React.FC<StepObject> = ({ step }) => {
	const { step: currentStep } = useSetStep();
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
						alignItems='center
					'
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

const SwitchDiv = styled.div`
	width: 3rem;
	height: 1.5rem;
	background: ${colors.MarineBlue};
	border-radius: 100vh;
`;

const SwitchContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const Circle = styled.button<Switch>`
	width: 1rem;
	height: 1rem;
	position: absolute;
	border-radius: 100vh;
	transition: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
	animation-duration: 500;
	cursor: pointer;
	background-color: white;
	border: none;
	margin-left: ${props => (props.isSelected ? '1rem' : '')};
`;

const Switch = styled.div`
	height: 4rem;
	background: ${colors.Alabaster};
	border-radius: 0.5rem;
`;

const Monthly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

const Yearly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

const SwitchAnnuality = () => {
	const { handleOnClick, isMonthly, isSelected, isYearly } =
		useSwitchAnnuality();

	return (
		<Switch>
			<Flex
				width='100%'
				height='100%'
				alignItems='center'
				justifyContent='center'
				gap='2rem'
			>
				<Monthly
					style={{
						color: `${
							isMonthly ? colors.CoolGray : colors.MarineBlue
						}`
					}}
				>
					monthly
				</Monthly>
				<SwitchDiv>
					<Padding width='100%' height='100%' paddingInline='0.5rem'>
						<Flex width='100%' height='100%' alignItems='center'>
							<SwitchContainer>
								<Flex
									width='100%'
									height='100%'
									alignItems='center'
								>
									<Circle
										onClick={handleOnClick}
										isSelected={isSelected}
									/>
								</Flex>
							</SwitchContainer>
						</Flex>
					</Padding>
				</SwitchDiv>
				<Yearly
					style={{
						color: `${
							isYearly ? colors.CoolGray : colors.MarineBlue
						}`
					}}
				>
					yearly
				</Yearly>
			</Flex>
		</Switch>
	);
};

export type TAddon = {
	title: string;
	content: string;
	price: number;
	annuality: string;
};

const AddonContainer = styled.div`
	width: 30rem;
	height: 5.5rem;
	border: 1px solid ${colors.PurplishBlue};
	border-radius: 0.5rem;
	cursor: pointer;
`;

const AddonCheck = styled.input`
	width: 1rem;
	height: 1rem;
`;

const Addons = () => {
	return (
		<Flex flexDirection='column' gap='1rem'>
			{/* {data?.map(a => (
				<Addon addon={a} key={a.title} />
			))} */}
		</Flex>
	);
};

const Addon: React.FC<AddonObject> = ({ addon }) => {
	const { content, price, title } = addon;

	return (
		<AddonContainer>
			<Padding height='100%' paddingInline='1rem'>
				<Flex
					height='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex alignItems='center' gap='1rem'>
						<AddonCheck type='checkbox' />
						<div>
							<h3>{title}</h3>
							<Text>{content}</Text>
						</div>
					</Flex>
					<span>+${price}/mo</span>
				</Flex>
			</Padding>
		</AddonContainer>
	);
};

const STEP = {
	ONE: 1,
	TWO: 2,
	THREE: 3
};

const Buttons = () => {
	const { step, setStep } = useSetStep();
	const navigate = useNavigate();
	const { plan } = usePlanStore();

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
	};

	const prevStep = () => {
		if (step === STEP.TWO) {
			setStep(step - 1);
			navigate('/plans');
		}
	};

	return (
		<Flex justifyContent='space-between'>
			<Margin marginBottom='2rem'>
				<GoBack
					onClick={prevStep}
					style={{ display: `${step !== 1 ? 'block' : 'none'}` }}
				>
					go back
				</GoBack>
			</Margin>
			<Margin marginBottom='2rem'>
				<NextStep onClick={nextStep}>next step</NextStep>
			</Margin>
		</Flex>
	);
};

export {
	User,
	Password,
	Container,
	ObvImage,
	ObvImageForm,
	Button,
	ContainerForm,
	H1Form,
	InputPassword,
	InputText,
	HomeContainer,
	GoBack,
	NextStep,
	Steps,
	SwitchAnnuality,
	Addons,
	Header,
	Buttons
};
