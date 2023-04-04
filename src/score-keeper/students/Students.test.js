import Students from "./Students";

import { render } from "_testUtils/render";

import { default as store } from "_redux/rootReducer";
import { loadStudents } from "_redux/score-keeper/scoreKeeperReducer";
import { demoClass } from "_redux/settings/settingsReducer";

describe("Students component", () => {
  store.dispatch(loadStudents(demoClass.students));

  it("renders without crashing", () => {
    render(<Students />, { store });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Students />, { store });
    expect(asFragment()).toMatchSnapshot();
  });
});
