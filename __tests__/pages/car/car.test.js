import { render, screen } from "@testing-library/react";
import Car from "../../../pages/car/[slug]";
import "@testing-library/jest-dom";

// Mock the useRouter hook from next/router
jest.mock("next/router", () => ({
    useRouter: () => ({
        query: { slug: "YourCar" }, // Mock the query.slug value here as needed
    }),
}));

// Mock the useTranslation hook from next-i18next
jest.mock("next-i18next", () => ({
    useTranslation: () => ({
        t: jest.fn((key) => key), // Mock the translation function
    }),
}));

describe("renders car page", () => {
    test("renders using getByText", () => {
        render(<Car />);
        // Use a regular expression with 'i' flag for case-insensitive match
        const fuelLabel = screen.getByText(/Fuel/i);
        expect(fuelLabel).toBeInTheDocument();
        const brandLabel = screen.getByText(/brand/i);
        expect(brandLabel).toBeInTheDocument();
        const modelLabel = screen.getByText(/Model/i);
        expect(modelLabel).toBeInTheDocument();
        const typeLabel = screen.getByText(/type/i);
        expect(typeLabel).toBeInTheDocument();
        const yearLabel = screen.getByText(/yearsOfConstruction/i);
        expect(yearLabel).toBeInTheDocument();
        const registerationLabel = screen.getByText(/initilaRegisteration/i);
        expect(registerationLabel).toBeInTheDocument();
        const invoiceLabel = screen.getByText(/invoiceValue/i);
        expect(invoiceLabel).toBeInTheDocument();
    })

    test("render by getByAltText", () => {
        render(<Car />);
        const inputElement = screen.getByAltText("Man Driving Car Banner")
        expect(inputElement).toBeInTheDocument();
    })

    // test("render by getByRole", () => {
    //     render(<Car />);
    //     const inputField = screen.getByRole("textbox", {
    //          name: "number1"
    //          });
    //     expect(inputField).toBeInTheDocument();
    // })

});

