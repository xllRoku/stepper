import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/auth-contenxt';
import { Container } from './components';
import { Grid } from './custom.styled.components';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Container>
				<Grid gridPlaceItems='center' height='100%'>
					<BrowserRouter>
						<AuthProvider>
							<App />
						</AuthProvider>
					</BrowserRouter>
				</Grid>
			</Container>
		</QueryClientProvider>
	</React.StrictMode>
);
