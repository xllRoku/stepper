import {
	Buttons,
	Header,
	HomeContainer,
	MainHome,
	SectionMainHome,
	Steps,
	SwitchAnnuality
} from './components';
import { Flex, Padding } from './custom.styled.components';

const AuthenticatedApp = () => {
	return (
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
								<SwitchAnnuality />
							</SectionMainHome>
							<Buttons />
						</Flex>
					</MainHome>
				</Flex>
			</Padding>
		</HomeContainer>
	);
};

export default AuthenticatedApp;
