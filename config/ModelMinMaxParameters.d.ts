import { ModelParameters } from "./ModelParameters";

export interface ModelMinMaxParameters<T> {
    min: ModelParameters<T>;
    max: ModelParameters<T>;
}
