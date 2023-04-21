import styled from 'styled-components';
import { colors } from './colors';

interface ISwitch {
	isSelected: boolean;
}

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

export { SwitchDiv, SwitchContainer, Circle, Switch, Monthly, Yearly };
