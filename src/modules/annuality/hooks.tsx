import { ANNUALITY } from '@shared/constans';
import { annualityStore } from './annuality.store';

export const useSwitchAnnuality = () => {
	const { annuality, update } = annualityStore();

	const isMonthly = annuality === ANNUALITY.MONTHLY;
	const isYearly = annuality === ANNUALITY.YEARLY;

	const changeAnnuality = () =>
		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

	const handleOnClick = () => {
		update(changeAnnuality());
	};

	return { handleOnClick, annuality, isMonthly, isYearly };
};
