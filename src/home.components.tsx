import styled from 'styled-components';
import { colors } from './colors';

const HomeContainer = styled.div`
	display: flex;
	gap: 7rem;
	background: white;
	padding: 1rem;
	padding-right: 7rem;
	border-radius: 1rem;
`;

const MainHome = styled.main``;

const HeaderHome = styled.header``;

const SectionMainHome = styled.section``;

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

export {
	HomeContainer,
	MainHome,
	HeaderHome,
	SectionMainHome,
	Title,
	Description,
	HeaderContent
};
