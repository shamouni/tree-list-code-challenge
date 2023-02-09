import { render, screen } from "@testing-library/react";
import Item from "../Item";

describe("Item", () => {

  test("renders component", () => {
    render(<Item title='hi' description='bye' children={[]} />);

    expect(screen.getByText('hi')).toBeInTheDocument();
    expect(screen.getByText('bye')).toBeInTheDocument();
  });
});
