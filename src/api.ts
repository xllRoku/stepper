import { ANNUALITY, PLANS_MONTHLY, PLANS_YEARLY } from './constans';

export interface IPlanApi {
	id: string;
	title: string;
	price: number;
	annuality: string;
	image: string;
}

function getPlan(annuality: string) {
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
}

export { getPlan };
