import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe('pages/NotFound', () => {
  it('renders text', () => {
    render(<NotFound />);

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
