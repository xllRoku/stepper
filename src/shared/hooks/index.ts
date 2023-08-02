import { useNavigate } from 'react-router-dom';
import { useStepStore } from '../store/store';
import { storePlan } from '../../modules/order/plans/context/plan.store';
import { storeAddons } from '../../modules/order/addons/context/addon.store';

export const STEP = {
	ONE: 1,
	TWO: 2,
	THREE: 3
};

export const useButton = () => {
	const { step, setStep, setConfirm, confirm } = useStepStore();
	const { navigate } = useNavigateTo();
	const { plan } = storePlan();
	const { addons } = storeAddons();

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
		if (step === STEP.TWO && addons.length !== 0) {
			setStep(step + 1);
			navigate('/summary');
		}
		if (step === STEP.THREE && addons) {
			setConfirm(true);
		}
	};

	const prevStep = () => {
		if (step === STEP.TWO) {
			setStep(step - 1);
			navigate('/plans');
		}
		if (step === STEP.THREE) {
			setStep(step - 1);
			navigate('/addons');
		}
	};

	const showBack = step > 1 && step <= 3 && !confirm;

	const showNext = !confirm;

	return { step, nextStep, prevStep, confirm, showBack, showNext };
};

export const useNavigateTo = () => {
	const navigate = useNavigate();

	return { navigate };
};
