import * as models from"../models";
import { Action } from "./Action";

export interface LowerApproximation extends Action {
    type: "lowerApproximation";
    modelParameters: models.parameters.SomeParameters;
    reduced: boolean;
}
