import { useEffect } from 'react';
import { Addon as AddonType, useAddonsId, useGetAddons } from '../hooks';
import { Flex, Padding, Text } from '../custom.styled.components';
import { AddonCheck, AddonContainer, Annuality, Header } from '../components';
import { Else, If, Then } from '../functional.component';
import Spinner from '../spinner';
import { useAddonStore } from '../store';

type AddonObject = {
	addon: AddonType;
};

const Addons = () => {
	const { data, isLoading: loading } = useGetAddons();
	const { addAddons, addonsFromApi } = useAddonStore();

	useEffect(() => {
		addAddons(data);
	}, [data]);

	if (addonsFromApi?.length === 0) {
		<p>loading...</p>;
	}

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
							widht='3rem'
							height='3rem'
							borderColor='black'
						/>
					</div>
				</Then>
				<Else predicate>
					{data?.map(a => (
						<Addon addon={a} key={a.id} />
					))}
				</Else>
			</If>
		</Flex>
	);
};

const Addon: React.FC<AddonObject> = ({ addon }) => {
	const { content, price, title, annuality } = addon;
	const { checked, handleAddId } = useAddonsId(addon);

	console.log(addon);

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
							name={addon.id}
							checked={checked}
							onChange={handleAddId}
						/>
						<div>
							<h3>{title}</h3>
							<Text>{content}</Text>
						</div>
					</Flex>
					<span>
						+${price}
						<Annuality annuality={annuality} key={annuality} />
					</span>
				</Flex>
			</Padding>
		</AddonContainer>
	);
};

export default Addons;
