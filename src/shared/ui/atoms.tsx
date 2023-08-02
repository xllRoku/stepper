import styled from 'styled-components';
import { colors } from '../colors';

export const ContainerStep = styled.div`
	border-radius: 0.5rem;
	position: relative;
`;

export const StepContainers = styled.ol`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
`;

export const GoBack = styled.button`
	width: 6rem;
	height: 3rem;
	background: transparent;
	border: none;
	color: ${colors.MarineBlue};
	font-weight: bold;
	text-transform: capitalize;
	cursor: pointer;
`;

export const NextStep = styled.button`
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

export const StepContent = styled.div`
	flex: 1;
	display: none;
	@media (min-width: 1200px) {
		display: block;
	}
`;

export const StepSpan = styled.div<{ selected: boolean }>`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 100vh;
	border: ${props => (props.selected ? 'none' : '2px solid white')};
	color: ${props => (props.selected ? 'hsl(213, 96%, 18%)' : 'white')};
	font-weight: bold;
	background: ${props =>
		props.selected ? 'hsl(228, 100%, 84%)' : 'transparent'};
`;

export const StepTitle = styled.h3`
	color: ${colors.White};
	text-transform: uppercase;
	font-size: 1rem;
`;

export const Container = styled.div`
	height: 100vh;
`;

export const LdsRing = styled.div`
	display: inline-block;
	position: relative;
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LdsRingChild = styled.div<Partial<Dimension>>`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: ${props => props.width ?? '24px'};
	height: ${props => props.height ?? '24px'};
	margin: 8px;
	border: 4px solid #fff;
	border-radius: 50%;
	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: ${props => props.borderColor ?? 'white'} transparent
		transparent transparent;
`;

export type Dimension = {
	width: string;
	height: string;
	borderColor: string;
};
