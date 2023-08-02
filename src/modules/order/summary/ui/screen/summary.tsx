import { useStepStore } from '@shared/store/store';
import { Confirm } from '../components/confirm';
import { TotalScreen } from '../components/totalScreen';

const Summary = () => {
	const { confirm } = useStepStore();

	return <>{confirm ? <Confirm /> : <TotalScreen />}</>;
};

export default Summary;
