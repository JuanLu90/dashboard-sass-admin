import { render, screen, waitFor } from "@testing-library/react";
import DashboardTablesGrid from "../DashboardTablesGrid";
import { dashboardTablesData } from "@/tests/mocks/dashboard/dashboardTablesMock";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(dashboardTablesData),
    }),
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("DashboardTablesGrid", () => {
  it("show skeleton while loading", () => {
    render(<DashboardTablesGrid />);
    expect(screen.getByTestId("dashboard-tables-skeleton")).toBeInTheDocument();
  });

  it("renders tables after fetch", async () => {
    render(<DashboardTablesGrid />);
    await waitFor(() => expect(screen.getByText("Recent Users")).toBeInTheDocument());
    expect(screen.getByText("Recent Subscriptions")).toBeInTheDocument();
    expect(screen.getByText("Recent Incidents")).toBeInTheDocument();
  });

  it("render a recent user", async () => {
    render(<DashboardTablesGrid />);

    await waitFor(() => {
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
      expect(screen.getAllByAltText("Alice Johnson")[0]).toBeInTheDocument();
    });
  });

  it("sets the correct color to status", async () => {
    render(<DashboardTablesGrid />);
    await waitFor(() => {
      const status = screen.getByText("Closed");
      expect(status).toHaveClass("bg-gray-700");
      expect(status).toHaveClass("text-gray-300");
    });
  });

  it("sets the correct color to priority", async () => {
    render(<DashboardTablesGrid />);
    await waitFor(() => {
      const priority = screen.getByText("Critical");
      expect(priority).toHaveClass("bg-red-900");
      expect(priority).toHaveClass("text-red-400");
    });
  });
});
