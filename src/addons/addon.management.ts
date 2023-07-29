import { AddonsActions } from './addon.model';
import { AddonWithId } from './addon.model';

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
		this.addon = new Addon(addonStore);
	}

	getAddons() {
		return this.addonStore.get();
	}

	addAddon(addon: AddonWithId | undefined) {
		if (this.addon.isAlreadySelected(addon?.id)) {
			this.removeAddon(addon);
		} else {
			this.addonStore.update(addon);
		}
	}

	updateAddon(addon: AddonWithId) {}

	removeAddon(addon: AddonWithId | undefined) {
		this.addonStore.delete(this.addon.remove(addon?.id));
	}
}
