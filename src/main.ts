import { IWeaponsRepository } from "./Interfaces/IWeaponsRepository";
import container from "./Infrastructure/Installer";
import SERVICE_IDENTIFIER from "./Constants/Identifiers";
import { BackpackService } from "./Services/BackpackService";


// Composition root
let weaponsRepo = container.get<IWeaponsRepository>(SERVICE_IDENTIFIER.IWeaponsRepository);
let service = new BackpackService(weaponsRepo);

console.log(service.get());