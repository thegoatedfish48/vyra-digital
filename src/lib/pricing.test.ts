import { strictEqual } from "node:assert";
import { test } from "node:test";
import {
  applyBlackNovemberDiscount,
  BLACK_NOVEMBER_DISCOUNT_PERCENT,
} from "./pricing";

test("Black November applies 30% off and rounds to the nearest cent", () => {
  strictEqual(BLACK_NOVEMBER_DISCOUNT_PERCENT, 30);
  strictEqual(applyBlackNovemberDiscount("R25.50–R127.50"), "R17.85–R89.25");
  strictEqual(applyBlackNovemberDiscount("from R127.50"), "from R89.25");
  strictEqual(applyBlackNovemberDiscount("R12.75–R68"), "R8.93–R47.60");
  strictEqual(applyBlackNovemberDiscount("R1,275"), "R892.50");
  strictEqual(applyBlackNovemberDiscount("R2,125+"), "R1,487.50+");
});