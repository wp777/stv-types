import * as models from"../models";
import { Action } from "./Action";

export type DominoDfsHeuristic = "basic" | "control" | "epistemic" | "visitedStates";

export interface DominoDfs extends Action {
    type: "dominoDfs";
    modelParameters: models.parameters.SomeParameters;
    heuristic: DominoDfsHeuristic;
    reduced: boolean;
}
