import {
	ADDNOS_YEARLY,
	ADDONS_MONTHLY,
	ANNUALITY,
	PLANS_MONTHLY,
	PLANS_YEARLY
} from './constans';

export interface IPlanApi {
	id: string;
	title: string;
	price: number;
	annuality: string;
	image: string;
}

export interface AddonApi {
	title: string;
	content: string;
	price: number;
	annuality: string;
}

const getPlan = (annuality: string) => {
	return new Promise<Array<IPlanApi>>((resolve, _) => {
		setTimeout(() => {
			if (
				annuality === ANNUALITY.MONTHLY ||
				annuality === ANNUALITY.YEARLY
			) {
				if (annuality === ANNUALITY.MONTHLY) resolve(PLANS_MONTHLY);

				if (annuality === ANNUALITY.YEARLY) resolve(PLANS_YEARLY);
			}
		}, 1000);
	});
};

const getAddons = (annuality: string) => {
	return new Promise<Array<AddonApi>>((resolve, _) => {
		setTimeout(() => {
			if (
				annuality === ANNUALITY.MONTHLY ||
				annuality === ANNUALITY.YEARLY
			) {
				if (annuality === ANNUALITY.MONTHLY) resolve(ADDONS_MONTHLY);

				if (annuality === ANNUALITY.YEARLY) resolve(ADDNOS_YEARLY);
			}
		}, 1000);
	});
};

export { getPlan, getAddons };
