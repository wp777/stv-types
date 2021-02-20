import { ModelParameters } from "./ModelParameters";

export interface SimpleVoting extends ModelParameters {
    type: "simpleVoting";
    candidates: number;
    voters: number;
}
