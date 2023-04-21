import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';

const api = 'http://localhost:3000';

export const REGISTER_USER_ENDPOINT = `${api}/'user/register';`;

const STEPS = [
	{
		id: '1',
		stepNumber: '1',
		title: 'select plan',
		url: ''
	},
	{
		id: '2',
		stepNumber: '2',
		title: 'add-ons',
		url: ''
	},
	{
		id: '3',
		stepNumber: '3',
		title: 'summary',
		url: ''
	}
];

const ANNUALITY = {
	MONTHLY: 'monthly',
	YEARLY: 'yearly'
};

const PLANS_MONTHLY = [
	{
		id: '1',
		title: 'arcade',
		price: 9,
		annuality: 'monthly',
		image: arcade
	},
	{
		id: '2',
		title: 'advanced',
		price: 12,
		annuality: 'monthly',
		image: advanced
	},
	{
		id: '3',
		title: 'pro',
		price: 15,
		annuality: 'monthly',
		image: iconPro
	}
];

const PLANS_YEARLY = [
	{
		id: '1',
		title: 'arcade',
		price: 90,
		annuality: 'yearly',
		image: arcade
	},
	{
		id: '2',
		title: 'advanced',
		price: 120,
		annuality: 'yearly',
		image: advanced
	},
	{
		id: '3',
		title: 'pro',
		price: 150,
		annuality: 'yearly',
		image: iconPro
	}
];

export { PLANS_MONTHLY, PLANS_YEARLY, STEPS, ANNUALITY };
