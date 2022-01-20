import { BisimulationChecking } from "./BisimulationChecking";
import { BisimulationModelsGeneration } from "./BisimulationModelsGeneration";
import { DominoDfs } from "./DominoDfs";
import { LowerApproximation } from "./LowerApproximation";
import { ModelGeneration } from "./ModelGeneration";
import { UpperApproximation } from "./UpperApproximation";
import { AssumptionModelGeneration } from "./AssumptionModelGeneration";
import { LowerApproximationAssumption } from "./LowerApproximationAssumption";
import { UpperApproximationAssumption } from "./UpperApproximationAssumption";

export type SomeAction = BisimulationChecking | BisimulationModelsGeneration | DominoDfs | LowerApproximation | ModelGeneration | UpperApproximation | AssumptionModelGeneration | LowerApproximationAssumption | UpperApproximationAssumption;
