import { logRoles, render, screen } from "@testing-library/react";
import Car from "../../../pages/car/[slug]";
import Dropdown from "@/components/dropdown/dropdown";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// Mock the useRouter hook from next/router
// jest.mock("next/router", () => ({
//     useRouter: () => ({
//         query: { slug: "YourCar" }, // Mock the query.slug value here as needed
//     }),
// }));
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

// Mock the useTranslation hook from next-i18next
jest.mock("next-i18next", () => ({
    useTranslation: () => ({
        t: jest.fn((key) => key), // Mock the translation function
    }),
}));

describe("renders car page", () => {
    test("renders using getByText", () => {
        useRouter.mockReturnValue({ query: { slug: "YourCar" } });
        const view = render(<Car />);
        logRoles(view.container)
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
        useRouter.mockReturnValue({ query: { slug: "YourCar" } });
        render(<Car />);
        const inputElement = screen.getByAltText("Man Driving Car Banner")
        expect(inputElement).toBeInTheDocument();
    })

    test("render by getByRole", () => {
        useRouter.mockReturnValue({ query: { slug: "YourCar" } });
        render(<Car />);
        const backButton = screen.getByRole("link");
        expect(backButton).toBeInTheDocument();
    })

});

describe("dropdown", () => {
    const options = [
        { label: "Essence", value: "Essence" },
        { label: "Diesel", value: "Diesel" },
        { label: "LPG", value: "LPG" },
        {
            label: "HYBRIDE (Essence + electrique)",
            value: "HYBRIDE (Essence + electrique)",
        },
        {
            label: "HYBRIDE (Diesel + electrique)",
            value: "HYBRIDE (Diesel + electrique)",
        },
        { label: "100% Electrique", value: "100% Electrique" },
    ]
    test("testing dropdown", () => {
        const view = render(
            <Dropdown
                options={options}
                label="Select an option"
                val=""
                id="my-dropdown"
                name="my-dropdown"
                handleChange={() => { }}
            />
        )
        logRoles(view.container);

        //Check if dropdown is render correctly
        const selectElement = screen.getByLabelText("Select");
        expect(selectElement).toBeInTheDocument();

        // Check if the options are rendered correctly
        // for (const option of options) {
        //     const menuItem = screen.getByText(option.label);
        //     expect(menuItem).toBeInTheDocument();
        // }
    })
})

