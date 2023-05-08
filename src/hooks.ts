import { useEffect, useState } from 'react';
import { useAnnualityStore, useStore, useSetStep, useAddons } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';
import { Addon } from './store';

const useFetch = <T>(fetchData: (annuality: string) => Promise<Array<T>>) => {
	const { removeAllAdons } = useAddons();
	const { annuality } = useAnnualityStore();
	const [state, setState] = useState<{ data: Array<T>; loading: boolean }>({
		data: [],
		loading: false
	});

	const startGetData = () => {
		setState({
			...state,
			loading: true
		});
	};

	const getDataSuccess = () => {
		fetchData(annuality).then(data =>
			setState({
				...state,
				data,
				loading: false
			})
		);
	};

	useEffect(() => {
		startGetData();
		getDataSuccess();
		return () => {
			removeAllAdons();
		};
	}, [annuality]);

	const { data, loading } = state;

	return { data, loading };
};

const useChangePlan = (id: string, title: string) => {
	const { plan: selectedPlan, setPlan, removePlan } = useStore();
	const { annuality } = useAnnualityStore();

	console.log(selectedPlan?.id);

	const handleOnClick = () => {
		if (selectedPlan?.id === id) {
			removePlan();
		} else {
			setPlan({ id, title });
		}
	};

	useEffect(() => {
		if (selectedPlan?.title === title) {
			setPlan({ ...selectedPlan, id });
		}
	}, [annuality]);

	const isPlanSelected = selectedPlan?.id === id;

	return { handleOnClick, isPlanSelected };
};

const useSwitchAnnuality = () => {
	const { annuality, setAnnuality } = useAnnualityStore();

	const isMonthly = annuality === ANNUALITY.MONTHLY;
	const isYearly = annuality === ANNUALITY.YEARLY;

	const changeAnnuality = () =>
		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

	const handleOnClick = () => {
		setAnnuality(changeAnnuality());
	};

	return { handleOnClick, annuality, isMonthly, isYearly };
};

const STEP = {
	ONE: 1,
	TWO: 2,
	THREE: 3
};

const useButton = () => {
	const { step, setStep } = useSetStep();
	const navigate = useNavigate();
	const { plan } = useStore();

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
	};

	const prevStep = () => {
		if (step === STEP.TWO) {
			setStep(step - 1);
			navigate('/plans');
		}
	};

	return { step, nextStep, prevStep };
};

const useAddonsId = (addonApi: Addon) => {
	const { addons } = useAddons();
	const { annuality } = useAnnualityStore();

	const findAddon = (addons: Addon[]) =>
		addons?.find(addon => addon.id === addonApi.id);

	// function getSelectedAddons(
	// 	addonsArray: Addon[],
	// 	selectedAddons: {
	// 		title: string;
	// 	}[]
	// ) {
	// 	return addonsArray.filter(addon => {
	// 		return selectedAddons.some(
	// 			selected => selected.title === addon.title
	// 		);
	// 	});
	// }

	// let exists = findAddon(selectedAddons);
	let checked = exists ? true : false;

	// const handleAddId = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const checked = event.target.checked;
	// 	if (checked && !exists)
	// 		setAddons({ id: addonApi.id, title: addonApi.title });
	// 	else removeAddon(addonApi.id);
	// };

	useEffect(() => {
		// const newAddons = addons.filter(addon =>
		// 	selectedAddons.some(selected => selected.title === addon.title)
		// );
		// const addon = newAddons.map(a => ({ id: a.id, title: a.title }));
		// removeSelectedAddons();
		// setAddons(addon);
	}, [annuality && addons]);

	return { handleAddId, checked };
};

export { useSwitchAnnuality, useChangePlan, useFetch, useButton, useAddonsId };
