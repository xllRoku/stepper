import { ReactNode } from 'react';
import { Input, Label } from '../atoms';
import { Flex, Padding } from '@shared/custom.styled.components';

export const InputPassword: React.FC<Input> = ({ name, value, icon }) => {
	return (
		<Label>
			<Padding
				width='100%'
				height='100%'
				paddingInline='1rem'
				paddingBlock='0.5rem'
			>
				<Flex justifyContent='center' gap='0.5rem'>
					{icon}
					<Input
						placeholder={name}
						name={name}
						value={value}
						type='password'
					/>
				</Flex>
			</Padding>
		</Label>
	);
};

export const InputText: React.FC<Input> = ({ name, value, icon }) => {
	return (
		<Label>
			<Padding
				width='100%'
				height='100%'
				paddingInline='1rem'
				paddingBlock='0.5rem'
			>
				<Flex justifyContent='center' gap='0.5rem'>
					{icon}
					<Input placeholder={name} name={name} value={value} />
				</Flex>
			</Padding>
		</Label>
	);
};

type Input = {
	name: string;
	value?: string;
	icon: ReactNode;
};
