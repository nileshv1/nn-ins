import { render, screen } from "@testing-library/react";
import Home from "../../../pages/home";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("HomeTest", () => {
  it("renders a heading", () => {
    render(<Home />);
    const assuranceimg = screen.getByAltText("assuranceimg");
    expect(assuranceimg.src !== "").toBeTruthy();
    const habitationimg = screen.getByAltText("habitationimg");
    expect(habitationimg.src !== "").toBeTruthy();
    expect(screen.getByText("headerInsurance")).toHaveTextContent(
      "headerInsurance"
    );
  });
});
