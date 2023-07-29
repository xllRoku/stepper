import styled from 'styled-components';
import { Dimension } from './types';

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
