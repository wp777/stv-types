import * as models from"../models";
import { Action } from "./Action";

export interface LowerApproximationAssumption extends Action {
    type: "lowerApproximationAssumption";
    modelParameters: models.parameters.SomeParameters;
    modelName: string;
}
