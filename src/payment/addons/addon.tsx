import styled from 'styled-components';
import { useAddons } from '../../hooks';
import { Flex, Padding } from '../../custom.styled.components';
import { colors } from '../../colors';

export interface Addon {
	title: string;
	content: string;
	price: number;
	annuality: string;
}

interface AddonObject {
	addon: Addon;
}

const AddonContainer = styled.div`
	width: 30rem;
	height: 5.5rem;
	border: 1px solid ${colors.PurplishBlue};
	border-radius: 0.5rem;
	cursor: pointer;
`;

const AddonCheck = styled.input`
	width: 1rem;
	height: 1rem;
`;

const AddonTitle = styled.h3``;

const AddonText = styled.p``;

const AddonPrice = styled.span``;

const Addons = () => {
	const { data, loading } = useAddons();

	return (
		<Flex flexDirection='column' gap='1rem'>
			{data.map(a => (
				<Addon addon={a} key={a.title} />
			))}
		</Flex>
	);
};

const Addon: React.FC<AddonObject> = ({ addon }) => {
	const { content, price, title } = addon;

	return (
		<AddonContainer>
			<Padding height='100%' paddingInline='1rem'>
				<Flex
					height='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex alignItems='center' gap='1rem'>
						<AddonCheck type='checkbox' />
						<div>
							<AddonTitle>{title}</AddonTitle>
							<AddonText>{content}</AddonText>
						</div>
					</Flex>
					<AddonPrice>+${price}/mo</AddonPrice>
				</Flex>
			</Padding>
		</AddonContainer>
	);
};

export default Addons;
