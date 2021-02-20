import * as models from"../models";
import { Action } from "./Action";

export interface UpperApproximation extends Action {
    type: "upperApproximation";
    modelParameters: models.parameters.SomeParameters;
    reduced: boolean;
}
