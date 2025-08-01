import { render, screen } from "@testing-library/react";
import PricingFeatureComparison from "../PricingFeatureComparison";
import { plansPricing, featureList } from "@/tests/mocks/plans/plansPricingMock";
import userEvent from "@testing-library/user-event";
import PricingCards from "../PricingCards";

describe("PricingFeatureComparison", () => {
  it("render plan`s names and features", () => {
    render(<PricingFeatureComparison />);

    plansPricing.forEach((plan) => {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
    });

    featureList.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it("show check or X correctly by each feature and plan", () => {
    render(<PricingFeatureComparison />);

    const rows = screen.getAllByRole("row");
    const apiAccessRow = rows.find((row) => row.textContent?.includes("Full API access"));
    expect(apiAccessRow).toBeTruthy();
    expect(apiAccessRow?.children[1].querySelector(".text-gray-500")).toBeInTheDocument();
    expect(apiAccessRow?.children[2].querySelector(".text-green-400")).toBeInTheDocument();
    expect(apiAccessRow?.children[3].querySelector(".text-green-400")).toBeInTheDocument();
  });

  it("match snapshot", () => {
    const { container } = render(<PricingFeatureComparison />);
    expect(container).toMatchSnapshot();
  });
});

describe("PricingCards", () => {
  it("match snapshot", () => {
    const { container } = render(<PricingCards />);
    expect(container).toMatchSnapshot();
  });

  it("allow to click in Select Plan", () => {
    render(<PricingCards />);
    const buttons = screen.getAllByRole("button", { name: /select plan/i });
    userEvent.click(buttons[0]);
  });
});
