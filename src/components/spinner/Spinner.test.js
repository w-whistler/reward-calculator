import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe('components/Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
