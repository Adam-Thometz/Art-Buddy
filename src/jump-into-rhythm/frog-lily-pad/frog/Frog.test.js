import Frog from "./Frog";

import { render } from "_testUtils/render";

import { blue } from "_media/jump-into-rhythm/frogs/frogs";

describe('Frog component', () => {
  it('renders without crashing', () => {
    render(<Frog frog={blue} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Frog frog={blue} />);
    expect(asFragment()).toMatchSnapshot();
  });
});