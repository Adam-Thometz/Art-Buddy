import WindowNavbar from "./WindowNavbar";

import { render } from "testUtils/render";
import { screen } from "@testing-library/react";

import ReportCardIcon from "views/instrument-id/play/listening-skills/level/corner-icon/ReportCardIcon";

describe("WindowNavbar component", () => {
  it("renders without crashing", () => {
    render(<WindowNavbar />);
  });

  it("matches the snapshot of the WindowNavbar", () => {
    const { asFragment } = render(<WindowNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a page and corner icon", () => {
    render(
      <WindowNavbar
        page="Listening Skills Test"
        cornerIcon={<ReportCardIcon />}
      />
    );
    expect(screen.getByText("Listening Skills Test")).toBeInTheDocument();
    expect(screen.getByText("REPORT CARD")).toBeInTheDocument();
  });
});
