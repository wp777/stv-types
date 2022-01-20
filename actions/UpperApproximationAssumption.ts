import * as models from"../models";
import { Action } from "./Action";

export interface UpperApproximationAssumption extends Action {
    type: "upperApproximationAssumption";
    modelParameters: models.parameters.SomeParameters;
    modelName: string;
}
