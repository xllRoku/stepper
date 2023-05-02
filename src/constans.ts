import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';

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
		id: '400dc279-f7fb-4d12-bf5e-79f8f94cde37',
		title: 'arcade',
		price: 9,
		annuality: 'monthly',
		image: arcade
	},
	{
		id: '0bb3fe68-7950-4e46-93c1-53efdd8e647c',
		title: 'advanced',
		price: 12,
		annuality: 'monthly',
		image: advanced
	},
	{
		id: '520bebf3-c6f1-42fe-955f-4c6f32a09a6f',
		title: 'pro',
		price: 15,
		annuality: 'monthly',
		image: iconPro
	}
];

const PLANS_YEARLY = [
	{
		id: 'be3fa63b-4b69-4ad2-a69f-4c2f28ca67d6',
		title: 'arcade',
		price: 90,
		annuality: 'yearly',
		image: arcade
	},
	{
		id: '72562616-5355-4500-82dd-33fccf31c712',
		title: 'advanced',
		price: 120,
		annuality: 'yearly',
		image: advanced
	},
	{
		id: '63c587c2-1b77-4759-83a4-066579e2d64f',
		title: 'pro',
		price: 150,
		annuality: 'yearly',
		image: iconPro
	}
];

const ADDONS_MONTHLY = [
	{
		title: 'Online service',
		content: 'Access to multiplaer games',
		price: 1,
		annuality: 'monthly'
	},
	{
		title: 'Larger storage',
		content: 'Extra 1TB of cloud save',
		price: 2,
		annuality: 'monthly'
	},
	{
		title: 'Customizable profile',
		content: 'Custom theme on your profile',
		price: 3,
		annuality: 'monthly'
	}
];

const ADDNOS_YEARLY = [
	{
		title: 'Online service',
		content: 'Access to multiplaer games',
		price: 10,
		annuality: 'yearly'
	},
	{
		title: 'Larger storage',
		content: 'Extra 1TB of cloud save',
		price: 20,
		annuality: 'yearly'
	},
	{
		title: 'Customizable profile',
		content: 'Custom theme on your profile',
		price: 20,
		annuality: 'yearly'
	}
];

export {
	PLANS_MONTHLY,
	PLANS_YEARLY,
	STEPS,
	ANNUALITY,
	ADDONS_MONTHLY,
	ADDNOS_YEARLY
};
