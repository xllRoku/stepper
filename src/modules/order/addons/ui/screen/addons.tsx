import { useAddonsManagement, useGetAddons } from '../../hooks';
import { useEffect } from 'react';
import { annualityStore } from '../../../annuality/context/annuality.store';
import { Flex } from '@shared/custom.styled.components';
import { Else, If, Then } from '@shared/functional.component';
import { Addon } from '../components/addon';
import { Header, Spinner } from '@shared/ui/molecules';

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

export default Addons;
