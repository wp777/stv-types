import * as models from"../models";
import { Action } from "./Action";

export interface BisimulationChecking extends Action {
    type: "bisimulationChecking";
    model1Parameters: models.parameters.File;
    model2Parameters: models.parameters.File;
    specification: models.parameters.File;
}
