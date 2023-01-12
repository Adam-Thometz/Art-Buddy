import ArtRoutes from "./ArtRoutes";

import { render } from "_testUtils/render";
import { screen } from "@testing-library/react";

import urls from '_routes/routeUrls';

describe('Art Routes', () => {
  it('renders without crashing', () => {
    render(<ArtRoutes />, { initialRoutes: [urls.freePaintUrl] });
  });
  
  it('renders free paint', () => {
    render(<ArtRoutes />, { initialRoutes: [urls.freePaintUrl] });
    expect(screen.getByText('FREE PAINT')).toBeInTheDocument();
  });

  it('renders color theory', () => {
    render(<ArtRoutes />, { initialRoutes: [urls.colorTheoryUrl] });
    expect(screen.getByText('COLOR THEORY')).toBeInTheDocument();
  });
});