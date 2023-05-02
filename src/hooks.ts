import { useEffect, useState } from 'react';
import { useAnnualityStore, useStore, useSetStep, useAddons } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';

const useFetch = <T>(fetchData: (annuality: string) => Promise<Array<T>>) => {
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

const useAddonsId = (id: string) => {
	const { addons, setAddons, removeAddon } = useAddons();

	console.log(addons);

	const findAddon = (addons: string[]) => addons?.find(addon => addon === id);

	// function getSelectedAddons(addonsArray, selectedIds) {
	// 	const selectedAddons = addonsArray
	// 		.filter(addon => selectedIds.includes(addon.id))
	// 		.map(addon => ({ id: addon.id, title: addon.title }));
	// 	return selectedAddons;
	// }

	let exists = findAddon(addons);
	let checked = exists ? true : false;

	const handleAddId = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		const newIds = [...addons, id];
		if (checked && !exists) setAddons(newIds);
		else removeAddon(id);
	};

	// primero necesito verificar si hay addons
	// luego necesito verificar cuales son los addons seleccionados y devolver un array con esos addons
	// luego necesito crear una funcion en la cual cada title del addon del array anterior concida con el title
	// pasado por props cambie el id de ese addon por el nuevo id

	return { handleAddId, checked };
};

export { useSwitchAnnuality, useChangePlan, useFetch, useButton, useAddonsId };
