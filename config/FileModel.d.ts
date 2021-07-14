export interface FileModel {
    maxFileSizeBytes: number;
    maxNumberOfAgentTypes: number;
    maxNumberOfAgentsPerType: number;
    maxNumberOfAgentsTotal: number;
    maxNumberOfStates: number;
    maxNumberOfTransitions: number;
    maxCoalitionSize: number;
    maxNumberOfPersistentVariables: number;
    maxNumberOfReductionVariables: number;
    maxNumberOfGoalVariables: number;
}
