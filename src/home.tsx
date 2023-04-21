import {
	Title,
	Description,
	HeaderContent,
	HomeContainer,
	MainHome,
	HeaderHome,
	SectionMainHome
} from './home.components';
import { Steps } from './steps';
import { Plans } from './plan';
import { SwitchAnnuality } from './switchAnnuality';
import { Flex } from './functional.component';

const Home = () => {
	return (
		<HomeContainer>
			<Flex gap='7rem'>
				<Steps />
				<MainHome>
					<HeaderHome>
						<HeaderContent>
							<Title>Select your plan</Title>
							<Description>
								You have the option of monthly of yearly
								billing.
							</Description>
						</HeaderContent>
					</HeaderHome>
					<SectionMainHome>
						<Plans />
						<SwitchAnnuality />
					</SectionMainHome>
				</MainHome>
			</Flex>
		</HomeContainer>
	);
};

export default Home;
