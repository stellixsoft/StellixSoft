export const rfidFields = [
  {
    key: "assets",
    label: "Tracked assets",
    unit: "assets",
    max: 100000000,
    step: 1,
  },
  {
    key: "facilities",
    label: "Facilities",
    unit: "sites",
    max: 10000,
    step: 1,
  },
  {
    key: "assetValue",
    label: "Average asset value",
    unit: "USD",
    max: 10000000,
    step: 1,
  },
  {
    key: "lossRate",
    label: "Annual asset loss rate",
    unit: "%",
    max: 100,
    step: 0.1,
  },
  {
    key: "lossReduction",
    label: "Expected loss reduction",
    unit: "%",
    max: 100,
    step: 1,
  },
  {
    key: "laborHours",
    label: "Annual inventory labor",
    unit: "hours",
    max: 10000000,
    step: 1,
  },
  {
    key: "hourlyCost",
    label: "Fully loaded hourly labor cost",
    unit: "USD",
    max: 10000,
    step: 1,
  },
  {
    key: "laborReduction",
    label: "Expected labor reduction",
    unit: "%",
    max: 100,
    step: 1,
  },
  {
    key: "tagCost",
    label: "Tag cost per asset",
    unit: "USD",
    max: 10000,
    step: 0.1,
  },
  {
    key: "readerCost",
    label: "Reader / installation cost per facility",
    unit: "USD",
    max: 10000000,
    step: 100,
  },
  {
    key: "softwareCost",
    label: "One-time software setup",
    unit: "USD",
    max: 100000000,
    step: 100,
  },
  {
    key: "integrationCost",
    label: "One-time integration cost",
    unit: "USD",
    max: 100000000,
    step: 100,
  },
  {
    key: "annualOperatingCost",
    label: "Annual operating cost",
    unit: "USD",
    max: 100000000,
    step: 100,
  },
] as const;
export type RfidInputs = Record<(typeof rfidFields)[number]["key"], number>;
export const defaultRfid: RfidInputs = {
  assets: 10000,
  facilities: 2,
  assetValue: 100,
  lossRate: 3,
  lossReduction: 50,
  laborHours: 2400,
  hourlyCost: 30,
  laborReduction: 50,
  tagCost: 0.5,
  readerCost: 5000,
  softwareCost: 10000,
  integrationCost: 15000,
  annualOperatingCost: 6000,
};
export function validateRfid(input: RfidInputs): string[] {
  return rfidFields.flatMap((f) =>
    !Number.isFinite(input[f.key]) ||
    input[f.key] < (f.key === "facilities" ? 1 : 0) ||
    input[f.key] > f.max ||
    ((f.key === "assets" || f.key === "facilities") &&
      !Number.isInteger(input[f.key]))
      ? [f.label]
      : [],
  );
}
export function calculateRfid(input: RfidInputs) {
  if (validateRfid(input).length) throw new Error("Invalid RFID inputs");
  const lossBefore = (input.assets * input.assetValue * input.lossRate) / 100;
  const lossSavings = (lossBefore * input.lossReduction) / 100;
  const laborSavings =
    (input.laborHours * input.hourlyCost * input.laborReduction) / 100;
  const grossSavings = lossSavings + laborSavings;
  const upfront =
    input.assets * input.tagCost +
    input.facilities * input.readerCost +
    input.softwareCost +
    input.integrationCost;
  const netAnnual = grossSavings - input.annualOperatingCost;
  const totalCost = upfront + input.annualOperatingCost * 3;
  const benefit = grossSavings * 3;
  return {
    lossBefore,
    lossSavings,
    laborSavings,
    grossSavings,
    upfront,
    netAnnual,
    totalCost,
    benefit,
    roi: totalCost > 0 ? ((benefit - totalCost) / totalCost) * 100 : null,
    paybackMonths: netAnnual > 0 ? (upfront / netAnnual) * 12 : null,
    years: [0, 1, 2, 3].map((year) => ({
      year,
      cashFlow: -upfront + netAnnual * year,
    })),
  };
}
