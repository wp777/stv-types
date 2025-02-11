import * as models from"../models";
import { Action } from "./Action";

export interface NaturalStrategy extends Action {
    type: "naturalStrategy";
    modelParameters: models.parameters.SomeParameters;
}
