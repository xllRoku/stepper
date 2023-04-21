import { Else, If, Then } from './functional.component';
import { usePlans } from './hooks';
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
import { usePlanStore } from './store';

interface IPlan {
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

	return (
		<ContainerButton>
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
		</ContainerButton>
	);
};

const Plan: React.FC<IPlanObject> = ({ plan }) => {
	const { image, price, title } = plan;
	const store = usePlanStore();

	const isPlanSelected = store.plan?.title === title;

	return (
		<ButtonPlan
			isSelected={isPlanSelected}
			onClick={() =>
				store.setPlan({
					id: plan.id,
					title: plan.title,
					price: plan.price,
					annuality: plan.annuality
				})
			}
		>
			<img src={image} alt='' />
			<ButtonInfo>
				<TitlePlan> {title} </TitlePlan>
				<PricePlan>${price}/mo</PricePlan>
			</ButtonInfo>
		</ButtonPlan>
	);
};

const Skeleton = () => {
	const COUNTER = 3;

	return (
		<>
			{Array(COUNTER).fill(
				<ButtonPlanSkeleton>
					<ButtonImageSkeleton className='loader' />
					<ButtonInfoSkeleton>
						<TitlePlanSkeleton className='loader'></TitlePlanSkeleton>
						<PricePlanSkeleton className='loader'></PricePlanSkeleton>
					</ButtonInfoSkeleton>
				</ButtonPlanSkeleton>
			)}
		</>
	);
};

export { Plans };
