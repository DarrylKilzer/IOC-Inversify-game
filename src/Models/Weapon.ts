export class Weapon {
    /**
     *stuff
     */
    constructor(name: string, damage: number, id: string) {
        // super();
        this.Name = name
        this.Damage = damage
        this.Id = id
    }

    public Name: string
    public Id: string
    public Damage: number
}