import styled from 'styled-components';
import { ANNUALITY } from '@shared/constans';
import { colors } from '@shared/colors';

export const Monthly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

export const Switch = styled.div`
	height: 4rem;
	background: ${colors.Alabaster};
	border-radius: 0.5rem;
`;

export const SwitchDiv = styled.div`
	width: 3rem;
	height: 1.5rem;
	background: ${colors.MarineBlue};
	border-radius: 100vh;
`;

export const SwitchContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Yearly = styled.span`
	text-transform: capitalize;
	font-weight: bold;
`;

export const Circle = styled.button<Annuality>`
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

type Annuality = {
	annuality: string;
};
