import React, { ReactNode, memo } from 'react';
import styled from 'styled-components';
import { Flex, Padding } from './functional.component';

type Input = {
	name: string;
	value?: string;
	icon: ReactNode;
	handleOnChnage: (eve: any) => void;
};

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

const Form = styled.form``;

const ContainerForm = styled.div`
	background: white;
`;

const Label = styled.label`
	width: 100%;
	border-bottom: 3px solid black;
	border-radius: 100vh;
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
	color: #00afa8;
`;

const InputPassword: React.FC<Input> = memo(
	({ name, value, icon, handleOnChnage }) => {
		return (
			<Label>
				<Padding paddingInline='1rem' paddingBlock='0.5rem'>
					<Flex justifyContent='center' gap='0.5rem'>
						{icon}
						<Input
							placeholder={name}
							name={name}
							onChange={handleOnChnage}
							value={value}
							type='password'
						/>
					</Flex>
				</Padding>
			</Label>
		);
	}
);

const InputText: React.FC<Input> = memo(
	({ name, value, icon, handleOnChnage }) => {
		return (
			//This can be a compound component
			<Label>
				<Padding paddingInline='1rem' paddingBlock='0.5rem'>
					<Flex justifyContent='center' gap='0.5rem'>
						{icon}
						<Input
							placeholder={name}
							name={name}
							value={value}
							onChange={handleOnChnage}
						/>
					</Flex>
				</Padding>
			</Label>
		);
	}
);

export {
	User,
	Password,
	Container,
	ObvImage,
	ObvImageForm,
	Form,
	ContainerForm,
	Label,
	Input,
	Button,
	H1Form,
	InputText,
	InputPassword
};
