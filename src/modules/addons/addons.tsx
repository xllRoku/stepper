import { AddonWithId } from './addons.model';
import { AddonCheck, AddonContainer, Price, Text, Title } from './ui/atoms';
import { useAddonsManagement, useGetAddons } from './hooks';
import { useEffect } from 'react';
import { annualityStore } from '../annuality/annuality.store';
import { Flex, Padding } from '@shared/custom.styled.components';
import { Annuality, Header, Spinner } from '@shared/molecules';
import { Else, If, Then } from '@shared/functional.component';

function Addons() {
	const { annuality } = annualityStore();
	const { upgradeAddons } = useAddonsManagement();
	const { data, isLoading: loading } = useGetAddons();

	useEffect(() => {
		if (data) {
			upgradeAddons(data);
		}
	}, [annuality, data]);

	return (
		<Flex flexDirection='column' gap='1rem'>
			<Header
				title='Pick add-ons'
				text='Add-ons help enhance your gaming experience.'
			/>
			<If predicate={loading}>
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
						<Addon addon={a} key={a.id} />
					))}
				</Else>
			</If>
		</Flex>
	);
}

function Addon({ addon }: { addon: AddonWithId }) {
	const { addAddon, getAddons } = useAddonsManagement();
	let checked = !!getAddons()?.find(addonStore => addonStore.id === addon.id);

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
							onChange={() => addAddon(addon)}
						/>
						<div>
							<Title>{addon.title}</Title>
							<Text>{addon.content}</Text>
						</div>
					</Flex>
					<Price>
						+${addon.price}
						<Annuality
							annuality={addon.annuality}
							key={addon.annuality}
						/>
					</Price>
				</Flex>
			</Padding>
		</AddonContainer>
	);
}

export default Addons;
