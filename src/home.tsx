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
import { Flex, Margin, Padding } from './functional.component';

const Home = () => {
	return (
		<HomeContainer>
			<Padding padding='1rem' paddingRight='7rem'>
				<Flex gap='7rem'>
					<Steps />
					<MainHome>
						<HeaderHome>
							<HeaderContent>
								<Margin marginTop='2rem'>
									<Title>Select your plan</Title>
									<Margin marginTop='1rem'>
										<Description>
											You have the option of monthly of
											yearly billing.
										</Description>
									</Margin>
								</Margin>
							</HeaderContent>
						</HeaderHome>
						<SectionMainHome>
							<Plans />
							<SwitchAnnuality />
						</SectionMainHome>
					</MainHome>
				</Flex>
			</Padding>
		</HomeContainer>
	);
};

export default Home;
