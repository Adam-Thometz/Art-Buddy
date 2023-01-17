import ReportCard from "./ReportCard";

import { render } from "_testUtils/render";

describe("ReportCard component", () => {
  it("renders without crashing", () => {
    render(<ReportCard game="instrumentId" level="1" />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ReportCard game="instrumentId" level="1" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
