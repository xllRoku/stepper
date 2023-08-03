import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Down, HomeContainer, Logout, Position, Section, Up } from '../atoms';
import { Flex, Padding } from '@shared/custom.styled.components';
import { Steps } from '@shared/ui/molecules';
import { Buttons } from '@shared/ui/components';
import { useNavigateTo } from '@shared/hooks';

export const Layout = () => {
	const {
		auth: { logout }
	} = useAuth();
	const { navigate } = useNavigateTo();
	return (
		<HomeContainer>
			<Position>
				<Logout
					onClick={() => {
						logout();
						navigate('/');
					}}
				>
					log out
				</Logout>
			</Position>
			<Padding
				width='100%'
				height='100%'
				media={{
					'@media (min-width: 1200px)': {
						padding: '1rem',
						paddingRight: '7rem'
					}
				}}
			>
				<Flex
					flexDirection='column'
					alignItems='center'
					height='100%'
					media={{
						'@media (min-width: 1200px)': {
							flexDirection: 'row',
							gap: '7rem',
							alignItems: 'normal'
						}
					}}
				>
					<Steps />
					<main style={{ width: '100%' }}>
						<Flex
							width='100%'
							height='100%'
							flexDirection='column'
							media={{
								'@media (min-width: 1200px)': {
									justifyContent: 'space-between'
								}
							}}
						>
							<Up>
								<Section>
									<Padding
										width='100%'
										height='100%'
										padding='1rem'
										media={{
											'@media (min-width: 1200px)': {
												padding: 0
											}
										}}
									>
										<Outlet />
									</Padding>
								</Section>
							</Up>
							<Down>
								<Padding
									width='100%'
									height='100%'
									padding='1rem'
									media={{
										'@media (min-width: 1200px)': {
											padding: 0
										}
									}}
								>
									<Buttons />
								</Padding>
							</Down>
						</Flex>
					</main>
				</Flex>
			</Padding>
		</HomeContainer>
	);
};
