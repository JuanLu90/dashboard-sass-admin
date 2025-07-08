import { render, screen, waitFor } from "@testing-library/react";
import KpiCardsGrid from "../KpiCardsGrid";
import { dashboardKpis } from "@/data/dashboard/kpiCardsMock";

describe("KpiCardsGrid", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dashboardKpis),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shows skeleton while loading", () => {
    render(<KpiCardsGrid />);
    expect(screen.getByTestId("kpi-skeleton")).toBeInTheDocument();
  });

  it("renders all KPI cards after fetch", async () => {
    render(<KpiCardsGrid />);
    await waitFor(() => expect(screen.getByText("Active Users")).toBeInTheDocument());
    expect(screen.getByText("New Subscriptions")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("Retention Rate")).toBeInTheDocument();
  });

  it("renders correct values and icons", async () => {
    render(<KpiCardsGrid />);
    await waitFor(() => {
      expect(screen.getByText("2,382")).toBeInTheDocument();
      expect(screen.getByText("154")).toBeInTheDocument();
      expect(screen.getByText("$21,300")).toBeInTheDocument();
      expect(screen.getByText("92.4%")).toBeInTheDocument();
    });
    expect(document.querySelectorAll("svg.w-5.h-5")).toHaveLength(4);
  });

  it("renders positive/negative changes with correct color", async () => {
    render(<KpiCardsGrid />);
    await waitFor(() => {
      expect(screen.getByText("3.65%")).toHaveClass("bg-red-900");
      expect(screen.getByText("6.21%")).toHaveClass("bg-green-900");
    });
  });
});
