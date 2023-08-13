import LearnFamilyPage from "./LearnFamilyPage";

import { render } from "testUtils/render";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    family: "brass",
  }),
}));

describe("LearnFamilyPage component", () => {
  it("renders without crashing", () => {
    render(<LearnFamilyPage />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<LearnFamilyPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
