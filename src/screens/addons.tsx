import { useAddonsId, useFetch } from '../hooks';
import * as api from '../api';
import type { Addon as TAddon } from '../api';
import { Flex, Padding, Text } from '../custom.styled.components';
import { AddonCheck, AddonContainer } from '../components';
import { Else, If, Then } from '../functional.component';
import Spinner from '../spinner';
import { useAddons } from '../store';
import { useEffect } from 'react';

type AddonObject = {
	addon: TAddon;
};

const Addons = () => {
	const { data, loading } = useFetch(api.getAddon);
	const { addAddons, addonsFromApi } = useAddons();

	useEffect(() => {
		addAddons(data);
	}, [data]);

	if (addonsFromApi.length === 0) {
		return <Spinner widht='3rem' height='3rem' borderColor='black' />;
	}

	return (
		<Flex flexDirection='column' gap='1rem'>
			<If predicate={loading}>
				<Then predicate>
					<Spinner widht='3rem' height='3rem' borderColor='black' />
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
	const { content, price, title } = addon;
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
							name={addon.id}
							checked={checked}
							onChange={handleAddId}
						/>
						<div>
							<h3>{title}</h3>
							<Text>{content}</Text>
						</div>
					</Flex>
					<span>+${price}/mo</span>
				</Flex>
			</Padding>
		</AddonContainer>
	);
};

export default Addons;
