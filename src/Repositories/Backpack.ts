import { IWeaponsRepository } from "../Interfaces/IWeaponsRepository";
import { Weapon } from "../Models/Weapon";
import { Guid } from "../utils/GUID";
import { inject, injectable, named } from "inversify";

@injectable()
export class Backpack implements IWeaponsRepository {

    private weaponList: Weapon[] = new Array(
        new Weapon("Sword", 25, Guid.newGuid()),
        new Weapon("Rusty Sword", 3, Guid.newGuid()),
        new Weapon("Banana", -25, Guid.newGuid())
    )

    get(): Weapon[] {
        return this.weaponList
    }

    getById(id: string): Weapon {
        return this.weaponList.find(w => w.Id == id)
    }

    add(weapon: Weapon): string {
        weapon.Id = Guid.newGuid()
        this.weaponList.push(weapon)
        return weapon.Id
    }

    edit(id: string, weapon: Weapon): Weapon {
        let weaponIndex = this.weaponList.findIndex(w => w.Id == id)
        this.weaponList[weaponIndex].Name = weapon.Name
        this.weaponList[weaponIndex].Damage = weapon.Damage
        return this.weaponList[weaponIndex]
    }

    delete(id: string): Weapon {
        let weaponIndex = this.weaponList.findIndex(w => w.Id == id);
        if (weaponIndex < 0) return null;
        return this.weaponList.splice(weaponIndex, 1)[0];
    }
}