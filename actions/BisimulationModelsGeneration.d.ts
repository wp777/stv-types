import * as models from"../models";
import { Action } from "./Action";

export interface BisimulationModelsGeneration extends Action {
    type: "bisimulationModelsGeneration";
    model1Parameters: models.parameters.File;
    model2Parameters: models.parameters.File;
}
