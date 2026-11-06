export const BLACK_NOVEMBER_DISCOUNT_PERCENT = 30;

export function applyBlackNovemberDiscount(priceText: string): string {
  return priceText.replace(/R([\d,]+(?:\.\d{1,2})?)(\+?)/g, (_match, rawAmount: string, plus: string) => {
    const [wholePart = "0", fractionPart = ""] = rawAmount
      .replaceAll(",", "")
      .split(".");
    const originalCents = Number(wholePart) * 100 + Number(fractionPart.padEnd(2, "0"));
    const saleCents = Math.floor(
      (originalCents * (100 - BLACK_NOVEMBER_DISCOUNT_PERCENT)) / 100 + 0.5,
    );
    const whole = Math.floor(saleCents / 100);
    const cents = saleCents % 100;
    const formattedWhole = whole.toLocaleString("en-US");
    const formattedCents = cents === 0 ? "" : `.${String(cents).padStart(2, "0")}`;

    return `R${formattedWhole}${formattedCents}${plus}`;
  });
}