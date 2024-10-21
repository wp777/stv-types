import * as models from"../models";
import { Action } from "./Action";

export interface OnTheFlyModelGeneration extends Action {
    type: "onTheFlyModelGeneration";
    modelParameters: models.parameters.SomeParameters;
}
