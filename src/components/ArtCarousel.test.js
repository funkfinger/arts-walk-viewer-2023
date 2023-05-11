import { render, screen } from "@testing-library/react";
import ArtCarousel from "./ArtCarousel";

test("renders carousel", () => {
  render(<ArtCarousel />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
