import { Weapon } from "../Models/Weapon";

export interface IWeaponsRepository {
    get(): Weapon[]
    getById(id: string): Weapon
    add(weapon: Weapon): string
    edit(id: string, weapon: Weapon): Weapon
    delete(id: string): Weapon
}