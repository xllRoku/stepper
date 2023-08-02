import { PlanActions, PlanWithId } from './plans.models';

export class Plan {
	constructor(private planStore: PlanActions) {}

	public areTheSame(id: PlanWithId['id'] | undefined) {
		return this.planStore.get()?.id === id;
	}
}

export class PlanController {
	private plan: Plan;
	constructor(private planStore: PlanActions) {
		this.getPlan = this.getPlan.bind(this);
		this.addPlan = this.addPlan.bind(this);
		this.upgradePlan = this.upgradePlan.bind(this);
		this.plan = new Plan(planStore);
	}

	public getPlan() {
		return this.planStore.get();
	}

	public upgradePlan(plans: PlanWithId[] | undefined) {
		this.planStore.update(
			plans?.find(plan => this.planStore.get()?.title === plan.title)
		);
	}

	public addPlan(plan: PlanWithId | undefined) {
		if (this.plan.areTheSame(plan?.id)) {
			this.planStore.delete();
		} else {
			this.planStore.update(plan);
		}
	}
}
