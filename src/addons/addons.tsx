import { useState } from 'react';
import { useGetAddons } from '../hooks';
import { Flex, Padding } from '../shared/custom.styled.components';
import { Else, If, Then } from '../shared/functional.component';
import { AddonCheck, AddonContainer } from '../iu/atoms';
import { AddonWithId } from './addon.model';
import { Price, Text, Title } from './components/atoms';
import { Annuality, Header, Spinner } from '../shared/molecules';
import { useAddonsManagement } from './hooks';

const Addons = () => {
	const { data, isLoading: loading } = useGetAddons();

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
};

const Addon: React.FC<{ addon: AddonWithId }> = ({ addon }) => {
	const { addAddon, getAddons } = useAddonsManagement();
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(prevChecked => !prevChecked);
		addAddon(addon);
	};

	console.log(getAddons());

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
							onChange={handleCheckboxChange}
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
};

export default Addons;
