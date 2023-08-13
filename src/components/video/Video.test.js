import Video from "./Video";

import { render } from "testUtils/render";

describe("Video component", () => {
  it("renders without crashing", () => {
    render(<Video uri="cNIg45GZ_ts" />);
  });

  it("matches the snapshot of the Video", () => {
    const { asFragment } = render(<Video uri="cNIg45GZ_ts" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
