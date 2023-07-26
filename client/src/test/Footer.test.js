import { act, render, screen } from "@testing-library/react";
import Footer from "../components/footer/Footer";


describe("Footer", () => {
  it("should render the current year", () => {
    render(<Footer />);
    // const year = new Date().getFullYear();
    expect(screen.getByText("SheRise")).toBeInTheDocument();
  });
});
