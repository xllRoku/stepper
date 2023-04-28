import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/auth-contenxt';
import { Container } from './components';
import { Grid } from './custom.styled.components';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Container>
					<Grid gridPlaceItems='center' height='100%'>
						<App />
					</Grid>
				</Container>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
