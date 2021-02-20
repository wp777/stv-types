import * as models from"../models";
import { Action } from "./Action";

export interface ModelGeneration extends Action {
    type: "modelGeneration";
    modelParameters: models.parameters.SomeParameters;
    reduced: boolean;
}
