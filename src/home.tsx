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

const Home = () => {
	return (
		<HomeContainer>
			<Steps />
			<MainHome>
				<HeaderHome>
					<HeaderContent>
						<Title>Select your plan</Title>
						<Description>
							You have the option of monthly of yearly billing.
						</Description>
					</HeaderContent>
				</HeaderHome>
				<SectionMainHome>
					<Plans />
					<SwitchAnnuality />
				</SectionMainHome>
			</MainHome>
		</HomeContainer>
	);
};

export default Home;
