import { useEffect } from 'react';
<<<<<<< HEAD
import type { AddonApi } from '../api';
import { useAddonsId, useGetAddons } from '../hooks';
import { Flex, Padding, Text } from '../custom.styled.components';
import { AddonCheck, AddonContainer, Header } from '../components';
import { Else, If, Then } from '../functional.component';
import Spinner from '../spinner';
import { useAddons } from '../store';

type AddonObject = {
	addon: AddonApi;
=======
import { Addon as AddonType, useAddonsId, useGetAddons } from '../hooks';
import { Flex, Padding } from '../custom.styled.components';
import { Else, If, Then } from '../functional.component';
import { useAddonStore } from '../context/store';
import styled from 'styled-components';
import { colors } from '../colors';
import { Annuality, Header, Spinner } from '../iu/molecules';
import { AddonCheck, AddonContainer } from '../iu/atoms';

type AddonObject = {
	addon: AddonType;
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
};

const Text = styled.p`
	font-size: 0.8rem;

	@media (min-width: 1200px) {
		font-size: 1rem;
	}
`;

const Title = styled.h3`
	font-size: 1rem;
	color: ${colors.MarineBlue};

	@media (min-width: 1200px) {
		font-size: 1.2rem;
	}
`;

const Price = styled.span`
	font-size: 0.95rem;
	color: ${colors.PurplishBlue};
`;

const Addons = () => {
	const { data, isLoading: loading } = useGetAddons();
<<<<<<< HEAD
	const { addAddons, addonsFromApi } = useAddons();
=======
	const { addAddons, addonsFromApi } = useAddonStore();
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac

	console.log(data);

	useEffect(() => {
		addAddons(data);
	}, [data]);

<<<<<<< HEAD
=======
	if (addonsFromApi?.length === 0) {
		<p>loading...</p>;
	}

>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
	return (
		<Flex flexDirection='column' gap='1rem'>
			<Header
				title='Pick add-ons'
				text='Add-ons help enhance your gaming experience.'
			/>
			<If predicate={loading || addonsFromApi?.length === 0}>
				<Then predicate>
					<div style={{ height: '300px' }}>
						<Spinner
							width='3rem'
							height='3rem'
							borderColor='black'
						/>
					</div>
				</Then>
				<Else predicate>
					{data?.map(a => (
						<Addon addon={a} key={a._id} />
					))}
				</Else>
			</If>
		</Flex>
	);
};

const Addon: React.FC<AddonObject> = ({ addon }) => {
	const { content, price, title, annuality } = addon;
	const { checked, handleAddId } = useAddonsId(addon);

	return (
		<AddonContainer>
			<Padding height='100%' paddingInline='1rem'>
				<Flex
					height='100%'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex alignItems='center' gap='1rem'>
						<AddonCheck
							type='checkbox'
							name={addon._id}
							checked={checked}
							onChange={handleAddId}
						/>
						<div>
							<Title>{title}</Title>
							<Text>{content}</Text>
						</div>
					</Flex>
					<Price>
						+${price}
						<Annuality annuality={annuality} key={annuality} />
					</Price>
				</Flex>
			</Padding>
		</AddonContainer>
	);
};

export default Addons;
