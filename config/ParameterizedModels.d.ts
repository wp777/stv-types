import { ModelMinMaxParameters } from "./ModelMinMaxParameters";
import * as modelParameters from "../models/parameters";

export interface ParameterizedModels {
    bridgeEndplay: ModelMinMaxParameters<modelParameters.BridgeEndplay>;
    castles: ModelMinMaxParameters<modelParameters.Castles>;
    drones: ModelMinMaxParameters<modelParameters.Drones>;
    simpleVoting: ModelMinMaxParameters<modelParameters.SimpleVoting>;
    tianJi: ModelMinMaxParameters<modelParameters.TianJi>;
}
