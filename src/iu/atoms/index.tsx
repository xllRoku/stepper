import styled from 'styled-components';
import { colors } from '../../colors';
import { ANNUALITY } from '../../constans';

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
	border-radius: 1rem;
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

const HomeContainer = styled.div`
	width: 100%;
	position: relative;
	@media (min-width: 1200px) {
		background: white;
		border-radius: 1rem;
		width: 980px;
	}
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
	color: white;
	font-weight: bold;
	border: none;
	text-transform: capitalize;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const ContainerStep = styled.div`
	border-radius: 0.5rem;
	position: relative;
`;

const StepContainers = styled.ol`
	width: 100%;
	height: 100%;
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
	display: none;
	@media (min-width: 1200px) {
		display: block;
	}
`;

const StepTitle = styled.h3`
	color: ${colors.White};
	text-transform: uppercase;
	font-size: 1rem;
`;

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

const Circle = styled.button<Annuality>`
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
	margin-left: ${props =>
		props.annuality === ANNUALITY.YEARLY ? '1rem' : '0'};
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

const AddonContainer = styled.div`
	width: 100%;
	height: 5rem;
	border: 1px solid ${colors.PurplishBlue};
	border-radius: 0.5rem;
	cursor: pointer;
	@media (min-width: 1200px) {
		height: 5.5rem;
	}
`;

const AddonCheck = styled.input`
	width: 1.2rem;
	height: 1.2rem;
	background-color: black;
`;

const Logout = styled.button`
	width: 4rem;
	height: 2rem;
	position: relative;
	text-transform: capitalize;
	background: ${colors.MarineBlue};
	border: none;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0.5rem;
	z-index: 1;
`;

const Position = styled.div`
	position: absolute;
	right: 30px;
	top: 10px;
`;

const Section = styled.section`
	background: white;
	border-radius: 0.5rem;
`;

const Up = styled.div`
	max-width: 340px;
	background: 'white';
	border-radius: '.5rem';
	position: relative;
	top: -50px;
	margin-inline: auto;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);

	@media (min-width: 1200px) {
		max-width: 100%;
		width: 100%;
		position: initial;
		top: 0;
		box-shadow: none;
	}
`;

const Down = styled.div`
	background: white;
	@media (min-width: 1200px) {
		background: none;
	}
`;

const PlanButton = styled.button<{ selected: boolean }>`
	flex: 1;
	height: 11rem;
	border-radius: 0.5rem;
	border: 1px solid ${colors.PurplishBlue};
	background: ${props =>
		props.selected ? `${colors.PastelBlue}` : 'transparent'};
	cursor: pointer;
`;

const Img = styled.img`
	width: 3rem;
`;

type Annuality = {
	annuality: string;
};

export {
	User,
	Button,
	Container,
	ContainerForm,
	H1Form,
	Input,
	Label,
	ObvImage,
	ObvImageForm,
	Password,
	HomeContainer,
	GoBack,
	NextStep,
	ContainerStep,
	StepContainers,
	StepSpan,
	StepContent,
	StepTitle,
	SwitchDiv,
	SwitchContainer,
	Circle,
	Switch,
	Monthly,
	Yearly,
	AddonContainer,
	AddonCheck,
	Logout,
	Position,
	Section,
	Up,
	Down,
	PlanButton,
	Img
};
