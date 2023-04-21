import {
	Title,
	Description,
	HeaderContent,
	HomeContainer,
	MainHome,
	HeaderHome,
	SectionMainHome
} from './home.components';
import { Steps } from '../steps/steps';
import { SwitchAnnuality } from '../switch/switchAnnuality';
import { Outlet } from 'react-router';
import { Container } from '../../auth/auth.components';
import { Flex, Grid, Margin, Padding } from '../../custom.styled.components';

const Home = () => {
	return (
		<Container>
			<Grid gridPlaceItems='center' height='100%'>
				<HomeContainer>
					<Padding padding='1rem' paddingRight='7rem'>
						<Flex gap='7rem'>
							<Steps />
							<MainHome>
								<Header />
								<SectionMainHome>
									<Outlet />
									<SwitchAnnuality />
								</SectionMainHome>
							</MainHome>
						</Flex>
					</Padding>
				</HomeContainer>
			</Grid>
		</Container>
	);
};

const Header = () => {
	return (
		<HeaderHome>
			<HeaderContent>
				<Margin marginTop='2rem'>
					<Title>Select your plan</Title>
					<Margin marginTop='1rem'>
						<Description>
							You have the option of monthly of yearly billing.
						</Description>
					</Margin>
				</Margin>
			</HeaderContent>
		</HeaderHome>
	);
};

export default Home;
