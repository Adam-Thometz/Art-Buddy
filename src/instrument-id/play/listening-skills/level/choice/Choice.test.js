import Choice from "./Choice";

import { render } from "_testUtils/render";

import getInstrument from "_utils/instrument-id/getInstrument";

describe('Choice component', () => {
  const choice = getInstrument('theremin');
  it('renders without crashing', () => {
    render(<Choice choice={choice} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Choice choice={choice} />);
    expect(asFragment()).toMatchSnapshot();
  });
});