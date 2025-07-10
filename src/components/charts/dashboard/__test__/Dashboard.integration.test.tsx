import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardPage from "@/app/page";
import { dashboardKpis } from "@/data/dashboard/kpiCardsMock";
import { dashboardTablesData } from "@/data/dashboard/dashboardTablesMock";
import { plansDistributionData } from "@/data/dashboard/planDistributionMock";
import { revenuePerMonthData } from "@/data/dashboard/revenuePerMonthMock";
import { generateDays } from "@/lib/utils";
import RootLayout from "@/app/layout";

beforeEach(() => {
  global.fetch = jest.fn((url: string) => {
    if (url.includes("mock-cards-kpi")) {
      return Promise.resolve({ json: () => Promise.resolve(dashboardKpis) });
    }
    if (url.includes("mock-recent-grid")) {
      return Promise.resolve({ json: () => Promise.resolve(dashboardTablesData) });
    }
    if (url.includes("mock-plans-distribution")) {
      return Promise.resolve({ json: () => Promise.resolve(plansDistributionData) });
    }
    if (url.includes("mock-active-users")) {
      return Promise.resolve({ json: () => Promise.resolve(revenuePerMonthData) });
    }
    if (url.includes("mock-revenue-per-month")) {
      return Promise.resolve({ json: () => Promise.resolve(generateDays()) });
    }
    return Promise.reject(new Error("Unhandled fetch URL"));
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

function AppWithLayout() {
  return (
    <RootLayout>
      <DashboardPage />
    </RootLayout>
  );
}

describe("Dashboard - Integration", () => {
  it("renders KPIs, tables, and charts in the main dashboard", async () => {
    render(<AppWithLayout />);

    expect(screen.getByTestId("kpi-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-tables-skeleton")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Active Users")).toBeInTheDocument();
      expect(screen.getByText("Recent Users")).toBeInTheDocument();
      expect(screen.getByText("Monthly Revenue")).toBeInTheDocument();
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    });
  });

  it("sidebar navigation changes the page", async () => {
    render(<AppWithLayout />);

    const usersLink = screen.getByRole("link", { name: /users/i });
    await userEvent.click(usersLink);

    await waitFor(() => {
      expect(screen.getByText("Users")).toBeInTheDocument();
    });
  });
});
