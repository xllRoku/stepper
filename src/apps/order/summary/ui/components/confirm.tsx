import thk from '@assets/images/icon-thank-you.svg';
import { colors } from '@shared/colors';
import { Flex } from '@shared/custom.styled.components';

export const Confirm = () => {
	return (
		<Flex
			width='100%'
			height='100%'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			gap='1rem'
		>
			<img src={thk} />
			<h1
				style={{
					color: `${colors.MarineBlue}`,
					fontWeight: 'bold',
					fontSize: '2rem'
				}}
			>
				Thank you!
			</h1>
			<p style={{ textAlign: 'center' }}>
				Thanks for confirming your subscription! We hope you have fun
				using or plaform. If you ever need support, please feel free to
				email us at support@loremgaming.com.
			</p>
		</Flex>
	);
};
