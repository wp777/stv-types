import { ModelParameters } from "./ModelParameters";

export interface Drones extends ModelParameters {
    type: "drones";
    initialEnergy: number;
    numberOfDrones: number;
}
