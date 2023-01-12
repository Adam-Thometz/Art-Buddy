import PlaySave from "./PlaySave";

import { render } from "_testUtils/render";

describe('PlaySave component', () => {
  it('renders without crashing', () => {
    render(<PlaySave />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PlaySave />);
    expect(asFragment()).toMatchSnapshot();
  });
});