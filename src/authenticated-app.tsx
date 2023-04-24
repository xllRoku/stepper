import {
	Container,
	Description,
	GoBack,
	HeaderContent,
	HeaderHome,
	HomeContainer,
	MainHome,
	NextStep,
	SectionMainHome,
	Steps,
	SwitchAnnuality,
	Title
} from './components';
import { Flex, Grid, Margin, Padding } from './custom.styled.components';

const Buttons = () => {
	return (
		<Flex justifyContent='space-between'>
			<Margin marginBottom='2rem'>
				<GoBack>go back</GoBack>
			</Margin>
			<Margin marginBottom='2rem'>
				<NextStep>next step</NextStep>
			</Margin>
		</Flex>
	);
};

const AuthenticatedApp = () => {
	return (
		<Container>
			<Grid gridPlaceItems='center' height='100%'>
				<HomeContainer>
					<Padding
						width='100%'
						height='100%'
						padding='1rem'
						paddingRight='7rem'
					>
						<Flex gap='7rem'>
							<Steps />
							<MainHome>
								<Flex
									width='100%'
									height='100%'
									flexDirection='column'
									justifyContent='space-between'
								>
									<Header />
									<SectionMainHome>
										<Steps />
										<SwitchAnnuality />
									</SectionMainHome>
									<Buttons />
								</Flex>
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
				<Margin width='100%' height='100%' marginTop='2rem'>
					<Title>Select your plan</Title>
					<Margin width='100%' height='100%' marginTop='1rem'>
						<Description>
							You have the option of monthly of yearly billing.
						</Description>
					</Margin>
				</Margin>
			</HeaderContent>
		</HeaderHome>
	);
};

export default AuthenticatedApp;
