import styled from 'styled-components';
import { colors } from '../../shared/colors';

export const Text = styled.p`
	font-size: 0.8rem;

	@media (min-width: 1200px) {
		font-size: 1rem;
	}
`;

export const Title = styled.h3`
	font-size: 1rem;
	color: ${colors.MarineBlue};

	@media (min-width: 1200px) {
		font-size: 1.2rem;
	}
`;

export const Price = styled.span`
	font-size: 0.95rem;
	color: ${colors.PurplishBlue};
`;

export const AddonCheck = styled.input`
	width: 1.2rem;
	height: 1.2rem;
	background-color: black;
`;

export const AddonContainer = styled.div`
	width: 100%;
	height: 5rem;
	border: 1px solid ${colors.PurplishBlue};
	border-radius: 0.5rem;
	cursor: pointer;
	@media (min-width: 1200px) {
		height: 5.5rem;
	}
`;
