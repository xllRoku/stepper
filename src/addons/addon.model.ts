export type Addon = {
	title: string;
	price: number;
	annuality: string;
	content: string;
};

export interface AddonFromApi extends Addon {
	_id: string;
}

export interface AddonWithId extends Addon {
	id: string;
}

export type AddonsStore = {
	addons: AddonWithId[];
};

export type AddonsActions = {
	get: () => AddonWithId[] | undefined;
	update: (addon: AddonWithId | AddonWithId[] | undefined) => void;
	delete: (addon: AddonWithId | AddonWithId[] | undefined) => void;
};
