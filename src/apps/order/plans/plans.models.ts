export type Plan = {
	title: string;
	annuality: string;
	price: number;
	image: string;
};

export interface PlanFromApi extends Plan {
	_id: string;
}

export interface PlanWithId extends Plan {
	id: string;
}

export type PlanStore = {
	plan: PlanWithId | undefined;
};

export type PlanActions = {
	get: () => PlanWithId | undefined;
	update: (plan: PlanWithId | undefined) => void;
	delete: () => void;
};
