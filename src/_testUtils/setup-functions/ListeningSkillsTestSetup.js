import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function setupChoices() {
  Math.random = jest.fn();
  Math.random.mockReturnValueOnce(0.25).mockReturnValue(0.5).mockReturnValueOnce(0.5);

  const dropdown = screen.getByText("CHOOSE FAMILY");
  userEvent.click(dropdown);
  const option = screen.queryAllByText("BRASS");
  userEvent.click(option[0]);
}
