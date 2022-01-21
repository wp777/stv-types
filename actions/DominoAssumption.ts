import * as models from"../models";
import { Action } from "./Action";
import { DominoDfsHeuristic } from "./DominoDfs";

export interface DominoAssumption extends Action {
    type: "dominoAssumption";
    modelParameters: models.parameters.SomeParameters;
    heuristic: DominoDfsHeuristic;
    modelName: string;
}
