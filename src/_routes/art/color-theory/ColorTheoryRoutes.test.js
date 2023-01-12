import ColorTheoryRoutes from "./ColorTheoryRoutes";

import { render } from "_testUtils/render";
import { screen } from "@testing-library/react";

import { colorTheoryUrls } from '_routes/routeUrls';

describe('Color Theory Routes', () => {
  it('renders without crashing', () => {
    render(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
  });

  it('renders the main learn page', () => {
    render(<ColorTheoryRoutes />, { initialRoutes: [colorTheoryUrls.learn] });
    expect(screen.getByText('PRIMARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('SECONDARY COLORS')).toBeInTheDocument();
    expect(screen.getByText('TERTIARY COLORS')).toBeInTheDocument();
  });

  it('renders different pages for different color catregories', () => {
    render(<ColorTheoryRoutes />, { initialRoutes: [`${colorTheoryUrls.learn}/primary`] });
    expect(screen.getByText('PRIMARY COLORS')).toBeInTheDocument();
    render(<ColorTheoryRoutes />, { initialRoutes: [`${colorTheoryUrls.learn}/secondary`] });
    expect(screen.getByText('SECONDARY COLORS')).toBeInTheDocument();
  });
});