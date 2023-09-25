import { render, screen, fireEvent } from '@testing-library/react';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSections from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";

test('renders Projects link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact me link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Contact Me/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href',"#contact-me");
});

test('renders Projects link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href',"#projects");
});

test('header displays social icons', () => {
  const socialMediaNames = ["email", "github", "linkedin", "medium", "stackoverflow"];
  render(<Header />);

  for (let i = 0; i < socialMediaNames.length; i++) {
    const emailIcon = screen.getByTestId(socialMediaNames[i]);
    expect(emailIcon).toBeInTheDocument();
  }
});

test('landing section renders avatar and greeting', () => {
  render(<LandingSection />);
  const avatar = screen.getByTestId("avatar");
  const greeting = screen.getByText(/Hello/i);
  expect(avatar).toBeInTheDocument();
});

test('projects section renders 4 project cards', () => {
  render(<ProjectsSections />);
  const allProjects = screen.getAllByTestId("project");
  expect(allProjects).toHaveLength(4);
});


test('contactme section renders the form correctly', () => {
  render(<ContactMeSection />);
  const firstNameInput = screen.getByTestId("firstName");
  expect(firstNameInput).toBeInTheDocument();
  const emailInput = screen.getByTestId("email");
  expect(emailInput).toBeInTheDocument();
  const commentInput = screen.getByTestId("comment");
  expect(commentInput).toBeInTheDocument();
});
