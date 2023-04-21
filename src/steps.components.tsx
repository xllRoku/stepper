import styled from 'styled-components';
import { colors } from './colors';

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

export {
	ContainerStep,
	Bg,
	StepContainers,
	StepContainer,
	StepSpan,
	StepContent,
	StepP,
	StepTitle,
	Padding
};
