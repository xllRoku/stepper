export type AuthStore = {
	token: string | undefined;
	error: string | undefined;
	loading: boolean | undefined;
};

export type AuthActions = {
	get: () => AuthStore;
	update: (data: AuthStore) => void;
};
