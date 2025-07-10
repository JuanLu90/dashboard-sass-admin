export const plansPricing = [
  {
    name: "Starter",
    price: 99,
    period: "yr",
    users: 1,
    description: "If you are a small business, please select this plan",
    features: {
      "Alias record": true,
      "Anycast DNS": true,
      "Full API access": false,
      "Multiple-layered DoS defense": false,
    },
  },
  {
    name: "Pro",
    price: 299,
    period: "yr",
    users: 5,
    description: "If you are a small business, please select this plan",
    features: {
      "Alias record": true,
      "Anycast DNS": true,
      "Full API access": true,
      "Multiple-layered DoS defense": false,
    },
  },
  {
    name: "Enterprise",
    price: 599,
    period: "yr",
    users: 20,
    description: "If you are a small business, please select this plan",
    features: {
      "Alias record": true,
      "Anycast DNS": true,
      "Full API access": true,
      "Multiple-layered DoS defense": true,
    },
  },
] as const;

export const featureList = [
  "Alias record",
  "Anycast DNS",
  "Full API access",
  "Multiple-layered DoS defense",
] as const;
