import { ModelParameters } from "./ModelParameters";

export interface BridgeEndplay extends ModelParameters {
    type: "bridgeEndplay";
    cardsInHand: number;
    deckSize: number;
}
