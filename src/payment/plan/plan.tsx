import { Flex, Margin, Padding } from '../../custom.styled.components';
import { Else, If, Then } from '../../functional.component';
import { useAnnuality, usePlans } from '../../hooks';
import {
	ButtonImageSkeleton,
	ButtonInfo,
	ButtonInfoSkeleton,
	ButtonPlan,
	ButtonPlanSkeleton,
	ContainerButton,
	PricePlan,
	PricePlanSkeleton,
	TitlePlan,
	TitlePlanSkeleton
} from './plan.components';

export interface IPlan {
	id: string;
	title: string;
	image: string;
	price: number;
	annuality: string;
}

interface IPlanObject {
	plan: IPlan;
}

const Plans = () => {
	const { data, loading } = usePlans();

	console.log(data);

	return (
		<ContainerButton>
			<Margin width='100%' height='100%' marginTop='3rem'>
				<Flex gap='1rem'>
					<If predicate={loading}>
						<Then predicate>
							<Skeleton />
						</Then>
						<Else predicate>
							{data.map(p => (
								<Plan key={p.id} plan={p} />
							))}
						</Else>
					</If>
				</Flex>
			</Margin>
		</ContainerButton>
	);
};

const Plan: React.FC<IPlanObject> = ({ plan }) => {
	const { handleOnClick, isPlanSelected } = useAnnuality(plan);
	const { image, price, title } = plan;

	return (
		<ButtonPlan isSelected={isPlanSelected} onClick={handleOnClick}>
			<Padding width='100%' height='100%' padding='1rem'>
				<Flex
					width='100%'
					height='100%'
					flexDirection='column'
					alignItems='start'
					justifyContent='space-between'
				>
					<img src={image} alt='' />
					<ButtonInfo>
						<TitlePlan> {title} </TitlePlan>
						<PricePlan>${price}/mo</PricePlan>
					</ButtonInfo>
				</Flex>
			</Padding>
		</ButtonPlan>
	);
};

const Skeleton = () => {
	const COUNTER = 3;

	return (
		<>
			{Array(COUNTER).fill(
				<ButtonPlanSkeleton>
					<Padding width='100%' height='100%' padding='1rem'>
						<Flex
							width='100%'
							height='100%'
							flexDirection='column'
							alignItems='start'
							justifyContent='space-between'
						>
							<ButtonImageSkeleton className='loader' />
							<ButtonInfoSkeleton>
								<TitlePlanSkeleton className='loader'></TitlePlanSkeleton>
								<Margin marginTop='0.5rem'>
									<PricePlanSkeleton className='loader'></PricePlanSkeleton>
								</Margin>
							</ButtonInfoSkeleton>
						</Flex>
					</Padding>
				</ButtonPlanSkeleton>
			)}
		</>
	);
};

export default Plans;
