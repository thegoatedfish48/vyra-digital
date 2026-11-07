import { strictEqual } from "node:assert";
import { test } from "node:test";
import {
  applyBlackNovemberDiscount,
  BLACK_NOVEMBER_DISCOUNT_PERCENT,
  roundRandPrices,
} from "./pricing";

test("Black November applies 30% off and rounds sale prices to whole Rand", () => {
  strictEqual(BLACK_NOVEMBER_DISCOUNT_PERCENT, 30);
  strictEqual(applyBlackNovemberDiscount("R25.50–R127.50"), "R18–R89");
  strictEqual(applyBlackNovemberDiscount("from R127.50"), "from R89");
  strictEqual(applyBlackNovemberDiscount("R12.75–R68"), "R9–R48");
  strictEqual(applyBlackNovemberDiscount("R212.50"), "R149");
  strictEqual(applyBlackNovemberDiscount("R1,275"), "R893");
  strictEqual(applyBlackNovemberDiscount("R2,125+"), "R1,488+");
});

test("original prices are also displayed as whole Rand", () => {
  strictEqual(roundRandPrices("R25.50–R127.50"), "R26–R128");
  strictEqual(roundRandPrices("from R127.50"), "from R128");
  strictEqual(roundRandPrices("R12.75–R68"), "R13–R68");
  strictEqual(roundRandPrices("R2,125+"), "R2,125+");
});