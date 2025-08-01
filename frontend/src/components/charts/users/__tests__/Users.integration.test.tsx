import { render, screen, waitFor } from "@testing-library/react";
import UsersPage from "@/app/users/page";
import { usersMock } from "@/tests/mocks/users/usersMock";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  global.fetch = jest.fn((url: string) => {
    if (url.includes("mock-users")) {
      return Promise.resolve({ json: () => Promise.resolve(usersMock) });
    }
    return Promise.reject("Not found");
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Users - Integration", () => {
  it("renders the users table with mock data", async () => {
    render(<UsersPage />);

    await waitFor(() => {
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
      expect(screen.getByText("alice@email.com")).toBeInTheDocument();
      expect(screen.getByText("2024-06-01")).toBeInTheDocument();
      expect(screen.getByText("Admin")).toBeInTheDocument();

      expect(screen.queryByText("Javier Moya")).not.toBeInTheDocument();
    });
  });

  it("render the second page of users", async () => {
    render(<UsersPage />);

    expect(screen.queryByText(/Javier Moya/i)).not.toBeInTheDocument();

    const nextBtn = screen.getByRole("button", { name: /next/i });
    await userEvent.click(nextBtn);

    await waitFor(() => {
      expect(screen.getByText("Javier Moya")).toBeInTheDocument();
      expect(screen.getByText("javier@email.com")).toBeInTheDocument();
      expect(screen.getByText("2024-06-08")).toBeInTheDocument();

      expect(screen.queryByText("Alice Johnson")).not.toBeInTheDocument();
    });
  });
});
