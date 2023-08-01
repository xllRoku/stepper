import { AddonsActions } from './addons.model';
import { AddonWithId } from './addons.model';

export class Addon {
	constructor(private addonStore: AddonsActions) {}

	public isAlreadySelected(id: AddonWithId['id'] | undefined) {
		return this.addonStore.get()?.find(addonStore => addonStore.id === id);
	}

	public remove(id: AddonWithId['id'] | undefined) {
		return this.addonStore
			.get()
			?.filter(addonStore => addonStore.id !== id);
	}
}

export class AddonManagement {
	private addon: Addon;
	constructor(private addonStore: AddonsActions) {
		this.addAddon = this.addAddon.bind(this);
		this.removeAddon = this.removeAddon.bind(this);
		this.getAddons = this.getAddons.bind(this);
		this.upgradeAddons = this.upgradeAddons.bind(this);
		this.addon = new Addon(addonStore);
	}

	public getAddons() {
		return this.addonStore.get();
	}

	public addAddon(addon: AddonWithId | undefined) {
		if (this.addon.isAlreadySelected(addon?.id)) {
			this.removeAddon(addon);
		} else {
			this.addonStore.add(addon);
		}
	}

	public upgradeAddons(addons: AddonWithId[]) {
		const currentAddons = this.addonStore.get();
		if (!currentAddons) return;

		const updated = currentAddons.map(selected => {
			const addon = addons.find(addon => addon.title === selected.title);
			return {
				...selected,
				id: addon ? addon.id : selected.id,
				price: addon ? addon.price : selected.price
			};
		});

		this.addonStore.update(updated);
	}

	removeAddon(addon: AddonWithId | undefined) {
		this.addonStore.delete(this.addon.remove(addon?.id));
	}
}
