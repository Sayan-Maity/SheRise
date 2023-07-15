import Footer from "../components/footer/Footer";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";
import { MemoryRouter, Router } from "react-router-dom";
import Developers from "../pages/developers/Developers";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

describe("Login", () => {
  it("Expecting true here", () => {
    // render(<Footer />)
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });
});
