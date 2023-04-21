import styled from 'styled-components';
import { colors } from '../../colors';

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

const StepSpan = styled.div`
	width: 2.5rem;
	height: 2.5rem;
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

export {
	ContainerStep,
	Bg,
	StepContainers,
	StepSpan,
	StepContent,
	StepP,
	StepTitle
};
