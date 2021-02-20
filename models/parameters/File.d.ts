import { ModelParameters } from "./ModelParameters";

export interface File extends ModelParameters {
    type: "file";
    modelString: string;
}
