import { Flex, Padding, Text } from '@shared/custom.styled.components';
import { AddonWithId } from '../../addons.model';
import { useAddonsManagement } from '../../hooks';
import { AddonCheck, AddonContainer, Price, Title } from '../atoms';
import { Annuality } from '@shared/ui/molecules';

export function Addon({ addon }: { addon: AddonWithId }) {
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
