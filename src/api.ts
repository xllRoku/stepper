import {
	ADDNOS_YEARLY,
	ADDONS_MONTHLY,
	PLANS_MONTHLY,
	PLANS_YEARLY
} from './constans';

export type Plan = {
	id: string;
	title: string;
	price: number;
	annuality: string;
	image: string;
};

export type Addon = {
	id: string;
	title: string;
	content: string;
	price: number;
	annuality: string;
};

const ANNUALITY = {
	MONTHLY: 'monthly',
	YEARLY: 'yearly'
};

const getPlan = (annuality: string) => {
	return new Promise<Array<Plan>>((resolve, _) => {
		setTimeout(() => {
			if (annuality === ANNUALITY.MONTHLY) resolve(PLANS_MONTHLY);

			if (annuality === ANNUALITY.YEARLY) resolve(PLANS_YEARLY);
		}, 1000);
	});
};

const getAddon = (annuality: string) => {
	return new Promise<Array<Addon>>((resolve, _) => {
		setTimeout(() => {
			if (annuality === ANNUALITY.MONTHLY) resolve(ADDONS_MONTHLY);

			if (annuality === ANNUALITY.YEARLY) resolve(ADDNOS_YEARLY);
		}, 1000);
	});
};

export { getPlan, getAddon };
