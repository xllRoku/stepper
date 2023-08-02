import styled from 'styled-components';
import { colors } from '@shared/colors';

export const UserIcon = () => (
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

export const PasswordIcon = () => (
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

export const ContainerForm = styled.div`
	background: white;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
`;

export const Button = styled.button`
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

export const H1Form = styled.h1`
	color: #00afa8;
`;

export const ObvImage = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	position: absolute;
	z-index: -1;
`;

export const ObvImageForm = styled.img`
	width: 100%;
	height: 20rem;
`;

export const Label = styled.label`
	width: 100%;
	border-bottom: 3px solid black;
	border-radius: 100vh;
`;

export const Input = styled.input`
	width: 100%;
	height: 2rem;
	border: none;
	border-radius: 100vh;
	&::placeholder {
		text-transform: capitalize;
		font-weight: bold;
	}
`;

export const Submit = styled.button`
	height: 2rem;
	text-transform: capitalize;
	border: none;
	background: none;
	cursor: pointer;
	color: ${colors.PurplishBlue};
	font-weight: bold;
`;

export const Down = styled.div`
	background: white;
	@media (min-width: 1200px) {
		background: none;
	}
`;

export const HomeContainer = styled.div`
	width: 100%;
	position: relative;
	@media (min-width: 1200px) {
		background: white;
		border-radius: 1rem;
		width: 980px;
	}
`;

export const Logout = styled.button`
	width: 4rem;
	height: 2rem;
	position: relative;
	text-transform: capitalize;
	background: ${colors.MarineBlue};
	border: none;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0.5rem;
	z-index: 1;
`;

export const Position = styled.div`
	position: absolute;
	right: 30px;
	top: 10px;
`;

export const Section = styled.section`
	background: white;
	border-radius: 0.5rem;
	height: 100%;
`;

export const Up = styled.div`
	max-width: 340px;
	background: 'white';
	border-radius: '.5rem';
	position: relative;
	top: -50px;
	margin-inline: auto;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);

	@media (min-width: 1200px) {
		max-width: 100%;
		width: 100%;
		height: 100%;
		position: initial;
		top: 0;
		box-shadow: none;
	}
`;
