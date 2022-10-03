import React from "react";

import renderWithProvider from '_testUtils/renderWithProvider';
import { screen } from "@testing-library/react";

import Button from './Button';

import colors from '_helpers/_utils/colorOrder';

describe('Button component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Button />);
  });

  it('matches the snapshot of the button', () => {
    const { asFragment } = renderWithProvider(<Button/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('changes border color based on passed in color', () => {
    renderWithProvider(<div>
      <Button colorId={0}>HELLO</Button>
      <Button colorId={1}>HOLA</Button>
      <Button selected colorId={2}>AHLAN</Button>
      <Button small colorId={3}>TRUMP'S HAND SIZE</Button>
    </div>);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('HELLO');
    expect(buttons[0]).toHaveStyle({borderColor: colors[0]});

    expect(buttons[1]).toHaveTextContent('HOLA');
    expect(buttons[1]).toHaveStyle({borderColor: colors[1]});

    expect(buttons[2]).toHaveTextContent('AHLAN');
    expect(buttons[2]).toHaveStyle({borderColor: colors[2]});
    expect(buttons[2]).toHaveClass('selected');
    
    expect(buttons[3]).toHaveTextContent("TRUMP'S HAND SIZE");
    expect(buttons[3]).toHaveStyle({borderColor: colors[3]});
    expect(buttons[3]).toHaveClass('small');
  });
});