import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER from "../Constants/Identifiers";
import { IWeaponsRepository } from "../Interfaces/IWeaponsRepository";
import { Backpack } from "../Repositories/Backpack";

let container = new Container();
container.bind<IWeaponsRepository>(SERVICE_IDENTIFIER.IWeaponsRepository).to(Backpack);

export default container;