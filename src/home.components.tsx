import styled from 'styled-components';
import { colors } from './colors';

interface IButton {
	isSelected: boolean;
}

interface ISwitch {
	isSelected: boolean;
}

const Container = styled.div`
	display: flex;
	gap: 7rem;
	background: white;
	padding: 1rem;
	padding-right: 7rem;
	border-radius: 1rem;
`;

const ContainerStep = styled.div`
	border-radius: 0.5rem;
	position: relative;
`;
const Bg = styled.img``;

const StepContainers = styled.ol`
	width: 100%;
	position: absolute;
	top: 0;
`;

const StepContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const StepSpan = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 100vh;
	border: 2px solid white;
	color: white;
	font-weight: bold;
`;

const StepContent = styled.div`
	flex: 1;
`;

const StepP = styled.p`
	font-weight: 100;
	text-transform: uppercase;
	color: ${colors.White};
`;

const StepTitle = styled.h3`
	color: ${colors.White};
	text-transform: uppercase;
	font-size: 1rem;
`;

const Padding = styled.div`
	padding-top: 2rem;
	padding-inline: 2rem;
	display: grid;
	gap: 2rem;
`;

const HeaderContent = styled.div`
	margin-top: 2rem;
`;

const Title = styled.h1`
	color: ${colors.MarineBlue};
`;

const Description = styled.p`
	color: ${colors.CoolGray};
	margin-top: 1rem;
`;

const ContainerButton = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	margin-top: 3rem;
`;

const ButtonPlan = styled.button<IButton>`
	width: 8rem;
	height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	border: 1px solid ${colors.CoolGray};
	background: ${props =>
		props.isSelected ? `${colors.PastelBlue}` : 'none'};
	border-radius: 0.5rem;
	padding: 1rem;
	cursor: pointer;
	&:hover {
		border: 1px solid ${colors.PurplishBlue};
		background: ${colors.PastelBlue};
	}
`;

const ButtonInfo = styled.div`
	text-align: start;
`;

const TitlePlan = styled.h3`
	color: ${colors.MarineBlue};
	text-transform: capitalize;
`;
const PricePlan = styled.span`
	color: ${colors.CoolGray};
`;

const SwitchDiv = styled.div`
	width: 2rem;
	height: 1.5rem;
	background: ${colors.MarineBlue};
	display: flex;
	align-items: center;
	border-radius: 100vh;
	padding-inline: 0.5rem;
`;

const SwitchContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
`;

const Circle = styled.button<ISwitch>`
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

const Align = styled.div`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${colors.Alabaster};
	gap: 2rem;
	border-radius: 0.5rem;
	margin-top: 2rem;
`;

const Monthly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

const Yearly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

const ButtonPlanSkeleton = styled.button`
	width: 8rem;
	height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	border: 1px solid ${colors.CoolGray};
	border-radius: 0.5rem;
	padding: 1rem;
`;

const ButtonImageSkeleton = styled.div`
	width: 40px;
	height: 42px;
	border-radius: 100vh;
`;

const ButtonInfoSkeleton = styled.div`
	text-align: start;
`;

const TitlePlanSkeleton = styled.h3`
	width: 80px;
	height: 16px;
	text-transform: capitalize;
	border-radius: 100vh;
`;
const PricePlanSkeleton = styled.div`
	width: 52px;
	height: 16px;
	border-radius: 100vh;
	margin-top: 0.5rem;
`;

export {
	Bg,
	ButtonPlan,
	Container,
	ContainerStep,
	Padding,
	StepSpan,
	StepContainer,
	StepContainers,
	StepContent,
	StepP,
	StepTitle,
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
	Monthly,
	Yearly,
	Align,
	ButtonPlanSkeleton,
	ButtonInfoSkeleton,
	TitlePlanSkeleton,
	PricePlanSkeleton,
	ButtonImageSkeleton
};
