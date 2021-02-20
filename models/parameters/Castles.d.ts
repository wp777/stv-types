import { ModelParameters } from "./ModelParameters";

export interface Castles extends ModelParameters {
    type: "castles";
    castle1Size: number;
    castle2Size: number;
    castle3Size: number;
    life: number;
}
