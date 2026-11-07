export const BLACK_NOVEMBER_DISCOUNT_PERCENT = 30;

export function applyBlackNovemberDiscount(priceText: string): string {
  return priceText.replace(/R([\d,]+(?:\.\d{1,2})?)(\+?)/g, (_match, rawAmount: string, plus: string) => {
    const originalCents = parseRandCents(rawAmount);
    const saleRand = Math.floor(
      (originalCents * (100 - BLACK_NOVEMBER_DISCOUNT_PERCENT)) / 10_000 + 0.5,
    );

    return `R${saleRand.toLocaleString("en-US")}${plus}`;
  });
}

export function roundRandPrices(priceText: string): string {
  return priceText.replace(/R([\d,]+(?:\.\d{1,2})?)(\+?)/g, (_match, rawAmount: string, plus: string) => {
    const wholeRand = Math.floor(parseRandCents(rawAmount) / 100 + 0.5);
    return `R${wholeRand.toLocaleString("en-US")}${plus}`;
  });
}

function parseRandCents(rawAmount: string): number {
  const [wholePart = "0", fractionPart = ""] = rawAmount
    .replaceAll(",", "")
    .split(".");
  return Number(wholePart) * 100 + Number(fractionPart.padEnd(2, "0"));
}