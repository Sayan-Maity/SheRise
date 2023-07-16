import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";
import { MemoryRouter, NavLink } from "react-router-dom";

// Helper function to render the Register component with MemoryRouter
const renderRegister = () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
};

describe("Component Navbar Test", () => {
  //   it("Home NavLink should be rendered with the correct text and destination", () => {
  //     const onClick = jest.fn();
  //     render(
  //       <MemoryRouter>
  //         <NavLink onClick={onClick} title="Add Item"/>
  //       </MemoryRouter>
  //     );

  //     const buttonElement = screen.getByText("Add Item");
  //     fireEvent.click(buttonElement);
  //     expect(onClick).toHaveBeenCalledTimes(1);
  //   });

  it("Home NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "HOME" });
    expect(navLinkElement.textContent).toBe("HOME");
    expect(navLinkElement.getAttribute("href")).toBe("/");
  });

  it("Scholarship NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "SCHOLARSHIP" });
    expect(navLinkElement.textContent).toBe("SCHOLARSHIP");
    expect(navLinkElement.getAttribute("href")).toBe("/scholarship");
  });

  it("Developers NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "DEVELOPERS" });
    expect(navLinkElement.textContent).toBe("DEVELOPERS");
    expect(navLinkElement.getAttribute("href")).toBe("/developers");
  });

  it("Contact Us NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "CONTACT US" });
    expect(navLinkElement.textContent).toBe("CONTACT US");
    expect(navLinkElement.getAttribute("href")).toBe("/contact");
  });

  it("Login NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "LOGIN" });
    expect(navLinkElement.textContent).toBe("LOGIN");
    expect(navLinkElement.getAttribute("href")).toBe("/login");
  });

  it("Register NavLink should be rendered with the correct text and destination", () => {
    renderRegister();
    const navLinkElement = screen.getByRole("link", { name: "REGISTER" });
    expect(navLinkElement.textContent).toBe("REGISTER");
    expect(navLinkElement.getAttribute("href")).toBe("/register");
  });
});
