import { useFetch } from '../hooks';
import * as api from '../api';

const Addons = () => {
	api.getAddon;

	const { data, loading } = useFetch(api.getAddon);

	console.log(data);

	return <div>hello from addons</div>;
};

export default Addons;
