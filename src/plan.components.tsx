import styled from 'styled-components';
import { colors } from './colors';

interface IButton {
	isSelected: boolean;
}

const ContainerButton = styled.div`
	width: 100%;
`;

const ButtonPlan = styled.button<IButton>`
	width: 8rem;
	height: 10rem;
	border: 1px solid
		${props =>
			props.isSelected
				? `${colors.PurplishBlue}`
				: `${colors.PastelBlue}`};
	background: ${props =>
		props.isSelected ? `${colors.PastelBlue}` : 'none'};
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		border: 1px solid ${colors.PurplishBlue};
		background: ${colors.PastelBlue};
	}
`;

const ButtonInfo = styled.div`
	text-align: start;
`;

const TitlePlan = styled.h3`
	color: ${colors.MarineBlue};
	text-transform: capitalize;
`;
const PricePlan = styled.span`
	color: ${colors.CoolGray};
`;

const ButtonPlanSkeleton = styled.button`
	width: 8rem;
	height: 10rem;
	border: 1px solid ${colors.CoolGray};
	border-radius: 0.5rem;
`;

const ButtonImageSkeleton = styled.div`
	width: 40px;
	height: 42px;
	border-radius: 100vh;
`;

const ButtonInfoSkeleton = styled.div`
	text-align: start;
`;

const TitlePlanSkeleton = styled.h3`
	width: 80px;
	height: 16px;
	text-transform: capitalize;
	border-radius: 100vh;
`;
const PricePlanSkeleton = styled.div`
	width: 52px;
	height: 16px;
	border-radius: 100vh;
`;

export {
	ContainerButton,
	ButtonPlan,
	ButtonInfo,
	TitlePlan,
	PricePlan,
	ButtonPlanSkeleton,
	ButtonImageSkeleton,
	ButtonInfoSkeleton,
	TitlePlanSkeleton,
	PricePlanSkeleton
};