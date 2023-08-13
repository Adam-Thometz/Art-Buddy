import ReportCardIcon from "./ReportCardIcon";

import { render } from "_testUtils/render";

describe("ReportCardIcon component", () => {
  it("renders without crashing", () => {
    render(<ReportCardIcon />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ReportCardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
