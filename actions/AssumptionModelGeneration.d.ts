import * as models from"../models";
import { Action } from "./Action";

export interface AssumptionModelGeneration extends Action {
    type: "assumptionModelGeneration";
    modelParameters: models.parameters.File;
}
