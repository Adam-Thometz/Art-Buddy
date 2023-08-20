import Students from "./Students";

import { render } from "test/render";

import { default as store } from "store/rootReducer";
import { loadStudents } from "store/score-keeper/scoreKeeperReducer";
import { demoClass } from "store/settings/settingsReducer";

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
