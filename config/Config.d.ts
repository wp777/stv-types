import { FileModel } from "./FileModel";
import { MappingFile } from "./MappingFile";
import { ParameterizedModels } from "./ParameterizedModels";

export interface Config {
    maxExecutionTimeSeconds: number;
    parameterizedModels: ParameterizedModels;
    fileModel: FileModel;
    mappingFile: MappingFile;
}
