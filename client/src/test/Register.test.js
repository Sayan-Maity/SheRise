import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { MemoryRouter, NavLink } from "react-router-dom";
import Register from "../pages/register/Register";


// Helper function to render the Register component with MemoryRouter
const renderRegister = () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
};

describe("/register", () => {
  it("First name input should be rendered", () => {
    renderRegister()
    const firstNameInput = screen.getByPlaceholderText(/First Name*/i);
    expect(firstNameInput).toBeInTheDocument();
  });

  it("Last name input should be rendered", () => {
    renderRegister()
    const lastNameInput = screen.getByPlaceholderText(/Last Name*/i);
    expect(lastNameInput).toBeInTheDocument();
  });

  it("Email input should be rendered", () => {
    renderRegister()
    const emailInput = screen.getByPlaceholderText(/Email*/i);
    expect(emailInput).toBeInTheDocument();
  });

  it("University input should be rendered", () => {
    renderRegister()
    const universityInput = screen.getByPlaceholderText(/Your University*/i);
    expect(universityInput).toBeInTheDocument();
  });

  it("Stream input should be rendered", () => {
    renderRegister()
    const streamInput = screen.getByPlaceholderText(/Stream*/i);
    expect(streamInput).toBeInTheDocument();
  });

  it("Passing year input should be rendered", () => {
    renderRegister()
    const yearInput = screen.getByPlaceholderText(/Passing Year*/i);
    expect(yearInput).toBeInTheDocument();
  });

  it("Country input should be rendered", () => {
    renderRegister()
    const countryInput = screen.getByPlaceholderText(/Country*/i);
    expect(countryInput).toBeInTheDocument();
  });

  it("Github input should be rendered", () => {
    renderRegister()
    const githubInput = screen.getByPlaceholderText(/Github Id*/i);
    expect(githubInput).toBeInTheDocument();
  });

  it("Linkedin input should be rendered", () => {
    renderRegister()
    const linkedinInput = screen.getByPlaceholderText(/Linkedin Id*/i);
    expect(linkedinInput).toBeInTheDocument();
  });

  it("Textarea should be rendered", () => {
    renderRegister()
    const textareaElement = screen.getByPlaceholderText('Describe yourself (in 10-15 words)*');
    expect(textareaElement).toBeInTheDocument();
  });

  it("First name input should change", () => {
    renderRegister()
    const firstNameInput = screen.getByPlaceholderText(/First Name*/i);
    const changeFirstName = "Sayan"
    fireEvent.change(firstNameInput, { target: { value: changeFirstName } });
    expect(firstNameInput.value).toBe(changeFirstName);
  });

  it("Last name input should change", () => {
    renderRegister()
    const lastNameInput = screen.getByPlaceholderText(/Last Name*/i);
    const changeLastName = "Maity"
    fireEvent.change(lastNameInput, { target: { value: changeLastName } });
    expect(lastNameInput.value).toBe(changeLastName);
  });

  it("Email input should change", () => {
    renderRegister()
    const emailInput = screen.getByPlaceholderText(/Email*/i);
    const changeEmail = "abc@gmail.com"
    fireEvent.change(emailInput, { target: { value: changeEmail } });
    expect(emailInput.value).toBe(changeEmail);
  });

  it("University input should change", () => {
    renderRegister()
    const universityInput = screen.getByPlaceholderText(/Your University*/i);
    const changeUniversity = "IIT Kharagpur"
    fireEvent.change(universityInput, { target: { value: changeUniversity } });
    expect(universityInput.value).toBe(changeUniversity);
  });

  it("Stream input should change", () => {
    renderRegister()
    const streamInput = screen.getByPlaceholderText(/Stream*/i);
    const changeStream = "Computer Science"
    fireEvent.change(streamInput, { target: { value: changeStream } });
    expect(streamInput.value).toBe(changeStream);
  });

  it("Passing year input should change", () => {
    renderRegister()
    const yearInput = screen.getByPlaceholderText(/Passing Year*/i);
    const changeYear = "2021"
    fireEvent.change(yearInput, { target: { value: changeYear } });
    expect(yearInput.value).toBe(changeYear);
  });

  it("Country input should change", () => {
    renderRegister()
    const countryInput = screen.getByPlaceholderText(/Country*/i);
    const changeCountry = "America"
    fireEvent.change(countryInput, { target: { value: changeCountry } });
    expect(countryInput.value).toBe(changeCountry);
  });

  it("Github input should change", () => {
    renderRegister()
    const githubInput = screen.getByPlaceholderText(/Github Id*/i);
    const changeGithub = "sayan-maity"
    fireEvent.change(githubInput, { target: { value: changeGithub } });
    expect(githubInput.value).toBe(changeGithub);
  });

  it("Linkedin input should change", () => {
    renderRegister()
    const linkedinInput = screen.getByPlaceholderText(/Linkedin Id*/i);
    const changeLinkedin = "sayan-maity"
    fireEvent.change(linkedinInput, { target: { value: changeLinkedin } });
    expect(linkedinInput.value).toBe(changeLinkedin);
  });

  it("Textarea should change", () => {
    renderRegister()
    const textareaElement = screen.getByPlaceholderText('Describe yourself (in 10-15 words)*');
    const changeTextarea = "I am a student"
    fireEvent.change(textareaElement, { target: { value: changeTextarea } });
    expect(textareaElement.value).toBe(changeTextarea);
  });

  it("Select Options should be rendered after clicking on any options", () => {
    renderRegister()
    const selectElement = screen.getByTitle('profession');
    const initialSelectedValue = "student"
    expect(selectElement.value).toBe(initialSelectedValue);    
    fireEvent.change(selectElement, { target: { value: 'frontend' } });
    expect(selectElement.value).toBe('frontend');
  });

  it('NavLink should be rendered with the correct text and destination', () => {
    renderRegister()
    const navLinkElement = screen.getByRole('link', { name: 'Login*' });  
    expect(navLinkElement.textContent).toBe('Login*');  
    expect(navLinkElement.getAttribute('href')).toBe('/login');
  });

  // it('Button should trigger the registration function and display appropriate text', () => {
  it('Please wait should not be rendered by default in the button', () => {
    renderRegister()
    const buttonElement = screen.getByRole('button', { name: 'Register' });  
    expect(buttonElement.textContent).not.toBe('Please Wait');  
  });

  it('handleRegistration should perform the registration flow correctly', async () => {
    
  });
  

});
