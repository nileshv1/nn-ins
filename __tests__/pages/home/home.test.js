import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../../pages/home";
import "@testing-library/jest-dom";
import { fetchAllUsers } from "../../../pages/api/user/user";

jest.mock("../../../pages/api/user/user");

describe("HomePage", () => {
  it("Assurance image must have img src and alt attribute", () => {
    render(<Home />);

    // /Assurance image must have img src and alt attribute
    const assuranceimg = screen.getByAltText("assuranceimg");
    expect(assuranceimg.src !== "").toBeTruthy();
    expect(assuranceimg.src).toContain(
      "http://localhost/_next/image?url=%2Fimg.jpg&w=256&q=75"
    );

    // Habitation image must have img src and alt attribute
    const habitationimg = screen.getByAltText("habitationimg");
    expect(habitationimg.src !== "").toBeTruthy();
    expect(habitationimg.src).toContain(
      "http://localhost/_next/image?url=%2Fimg.jpg&w=256&q=75"
    );

    //Test Home Header
    expect(screen.getByText("headerInsurance")).toHaveTextContent(
      "headerInsurance"
    );

    //When clicking habitation image redirect to habitation page
    const searchButton = screen.getByRole("linkimg");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect("/habitation").toEqual("/habitation");

    // /ome button must be disabled
    expect(screen.getByRole("button")).toHaveTextContent("Home");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // After each test clear the mock
  beforeEach(() => jest.clearAllMocks());

  it("renders users when user API call succeeds", async () => {
    fetchAllUsers.mockResolvedValue({
      results: [{ status: 200, name: "butterfree" }],
    });
    render(<Home />);
    await waitFor(() => {
      screen.getByText("butterfree");
    });
  });

  beforeEach(() => jest.clearAllMocks());
});
