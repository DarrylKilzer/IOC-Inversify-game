import { IWeaponsRepository } from "../Interfaces/IWeaponsRepository";
import { Weapon } from "../Models/Weapon";

export class BackpackService {
    private readonly _repo: IWeaponsRepository
    /**
     *
     */
    constructor(repo: IWeaponsRepository) {
        // super();
        this._repo = repo
    }

    get(): Weapon[] {
        return this._repo.get()
    }

    getById(id: string): Weapon {
        return this._repo.getById(id)
    }

    add(weapon: Weapon): string {
        return this._repo.add(weapon)
    }

    edit(id: string, weapon: Weapon): Weapon {
        return this._repo.edit(id, weapon)
    }

    delete(id: string): Weapon {
        return this._repo.delete(id)
    }

}