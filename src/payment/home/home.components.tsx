import styled from 'styled-components';
import { colors } from '../../colors';

const HomeContainer = styled.div`
	background: white;
	border-radius: 1rem;
`;

const MainHome = styled.main``;

const HeaderHome = styled.header``;

const SectionMainHome = styled.section``;

const HeaderContent = styled.div``;

const Title = styled.h1`
	color: ${colors.MarineBlue};
`;

const Description = styled.p`
	color: ${colors.CoolGray};
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
	background: ${colors.MarineBlue};
	color: white;
	font-weight: bold;
	border: none;
	text-transform: capitalize;
	cursor: pointer;
`;

export {
	HomeContainer,
	MainHome,
	HeaderHome,
	SectionMainHome,
	Title,
	Description,
	HeaderContent,
	GoBack,
	NextStep
};
