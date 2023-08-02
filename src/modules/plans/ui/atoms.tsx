import styled from 'styled-components';
import { colors } from '../../shared/colors';

export const Img = styled.img`
	width: 3rem;
`;

export const PlanButton = styled.button<{ selected: boolean | undefined }>`
	flex: 1;
	height: 11rem;
	border-radius: 0.5rem;
	border: 1px solid ${colors.PurplishBlue};
	background: ${props =>
		props.selected ? `${colors.PastelBlue}` : 'transparent'};
	cursor: pointer;
`;
