import { render, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from '../loginForm';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

describe('LoginForm', () => {
	it('renders without errors', () => {
		const mockSubmit = vi.fn();

		const { getByText, getByPlaceholderText } = render(
			<MemoryRouter>
				<LoginForm onSubmit={mockSubmit} />
			</MemoryRouter>
		);

		expect(getByText('user login')).toBeInTheDocument();
		expect(getByPlaceholderText('email')).toBeInTheDocument();
		expect(getByPlaceholderText('password')).toBeInTheDocument();
		expect(getByText('sign up')).toBeInTheDocument();
	});

	it('calls onSubmit with user data when form is submitted',  async() => {
		const mockSubmit = vi.fn();

		const { getByPlaceholderText, getByText } = render(
			<MemoryRouter>
				<LoginForm onSubmit={mockSubmit} />
			</MemoryRouter>
		);

		const emailInput = getByPlaceholderText('email');
		const passwordInput = getByPlaceholderText('password');
		fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
		fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

		const submitButton = getByText('sign up');
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(mockSubmit).toHaveBeenCalledWith({
				email: 'test@example.com',
				password: 'testpassword'
			});
		});
	});
});
