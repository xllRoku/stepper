import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Grid } from './shared/custom.styled.components';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './shared/ui/atoms';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Container>
				<Grid gridPlaceItems='center' height='100%'>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Grid>
			</Container>
		</QueryClientProvider>
	</React.StrictMode>
);
