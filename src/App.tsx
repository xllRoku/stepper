import React, { ReactNode } from 'react';
import obv from './assets/images/obvli.jpg';
import styled from 'styled-components';

type Input = {
	name: string;
	icon: ReactNode;
};

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

function App() {
	const User = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='user'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
			/>
		</svg>
	);

	const Password = () => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='password'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
			/>
		</svg>
	);

	const Container = styled.div`
		height: 100vh;
		display: grid;
		place-items: center;
	`;

	const ObvImage = styled.img`
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
	`;

	const ObvImageForm = styled.img`
		width: 30rem;
		height: 20rem;
	`;

	const Form = styled.form`
		padding-inline: 6rem;
		padding-block: 1rem;
	`;

	const ContainerForm = styled.div`
		background: white;
	`;

	const Label = styled.label`
		display: flex;
		width: 100%;
		border-bottom: 3px solid black;
		border-radius: 100vh;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		gap: 0.5rem;
		justify-content: center;
	`;

	const Input = styled.input`
		width: 100%;
		height: 2rem;
		border: none;
		border-radius: 100vh;
		&::placeholder {
			text-transform: capitalize;
			font-weight: bold;
		}
	`;

	const Center = styled.div`
		display: grid;
		place-items: center;
		gap: 1rem;
	`;

	const Button = styled.button`
		width: 8rem;
		height: 2.5rem;
		border-radius: 100vh;
		border: none;
		background: #78af89;
		border-bottom: 3px solid #2f4858;
		color: white;
		text-transform: capitalize;
		font-weight: bold;
		cursor: pointer;
	`;

	const H1Form = styled.h1`
		margin-bottom: 0;
		color: #00afa8;
	`;

	const InputText: React.FC<Input> = ({ name, icon }) => {
		return (
			<Label>
				{icon}
				<Input placeholder={name} name={name} />
			</Label>
		);
	};

	return (
		<Container>
			<ObvImage src={obv} />
			<ContainerForm>
				<ObvImageForm src={obv} />
				<Form>
					<Center>
						<H1Form>user login</H1Form>
						<InputText icon={<User />} name={FORM_NAMES.EMAIL} />
						<InputText
							icon={<Password />}
							name={FORM_NAMES.PASSWORD}
						/>
						<Button>sign in</Button>
					</Center>
				</Form>
			</ContainerForm>
		</Container>
	);
}

export default App;
