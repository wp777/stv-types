import { BisimulationChecking } from "./BisimulationChecking";
import { BisimulationModelsGeneration } from "./BisimulationModelsGeneration";
import { DominoDfs } from "./DominoDfs";
import { LowerApproximation } from "./LowerApproximation";
import { ModelGeneration } from "./ModelGeneration";
import { UpperApproximation } from "./UpperApproximation";

export type SomeAction = BisimulationChecking | BisimulationModelsGeneration | DominoDfs | LowerApproximation | ModelGeneration | UpperApproximation;
