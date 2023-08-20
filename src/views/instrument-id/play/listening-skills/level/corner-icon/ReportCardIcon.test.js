import ReportCardIcon from "./ReportCardIcon";

import { render } from "test/render";

describe("ReportCardIcon component", () => {
  it("renders without crashing", () => {
    render(<ReportCardIcon />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ReportCardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
