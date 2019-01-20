
// AgcSoybeanProductionCost: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-soybean-production-cost.core.js';
import {
  AgcSoybeanProductionCost,
  AgcSoybeanProductionCostInputs,
  AgcSoybeanProductionCostProgress,
  AgcSoybeanProductionCostResults,
  AgcSoybeanProductionCostResultsPlaceholder
} from './agc-soybean-production-cost.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcSoybeanProductionCost,
    AgcSoybeanProductionCostInputs,
    AgcSoybeanProductionCostProgress,
    AgcSoybeanProductionCostResults,
    AgcSoybeanProductionCostResultsPlaceholder
  ], opts);
}
