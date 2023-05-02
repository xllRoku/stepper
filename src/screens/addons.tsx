import { useFetch } from '../hooks';
import * as api from '../api';
import { Addon as TAddon } from '../api';
import { Flex, Padding, Text } from '../custom.styled.components';
import { AddonCheck, AddonContainer } from '../components';
import { Else, If, Then } from '../functional.component';
import Spinner from '../spinner';

type AddonObject = {
	addon: TAddon;
};

const Addons = () => {
	const { data, loading } = useFetch(api.getAddon);

	console.log(data);

	return (
		<Flex flexDirection='column' gap='1rem'>
			<If predicate={loading}>
				<Then predicate>
					<Spinner widht='3rem' height='3rem' borderColor='black' />
				</Then>
				<Else predicate>
					{data?.map(a => (
						<Addon addon={a} key={a.title} />
					))}
				</Else>
			</If>
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
