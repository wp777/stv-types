import * as parameters from "./parameters";

export interface Model<T extends parameters.ModelParameters> {
    parameters: T;
    formula: string;
    globalModel: any;
    reducedModel: any;
}
