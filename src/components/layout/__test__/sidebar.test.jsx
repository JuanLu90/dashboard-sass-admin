import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/");
  });

  it("renders a heading", () => {
    render(<Sidebar />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Plans")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("applies active style to the current route", () => {
    usePathname.mockReturnValue("/users");
    render(<Sidebar open={true} />);

    const usersLink = screen.getByText("Users");
    expect(usersLink).toHaveClass("font-bold");
    expect(usersLink).toHaveClass("bg-gray-700");
  });

  it("renders the icons", () => {
    render(<Sidebar open={true} />);
    expect(document.querySelectorAll("svg.w-5.h-5")).toHaveLength(4);
  });

  it("has a settings link", () => {
    render(<Sidebar open={true} />);
    const settingsLink = screen.getByText("Settings");
    expect(settingsLink.closest("a")).toHaveAttribute("href", "/settings");
  });
});
