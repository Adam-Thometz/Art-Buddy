import ArtBuddyRoutes from "./ArtBuddyRoutes";

import { render } from "_testUtils/render";
import { screen } from "@testing-library/react";

describe('Art Buddy Routes', () => {
  it('renders without crashing', () => {
    render(<ArtBuddyRoutes />);
  });

  it('renders the 404 page', () => {
    render(<ArtBuddyRoutes />, { initialRoutes: ['/gregwerg'] });
    expect(screen.getByText('UH OH!')).toBeInTheDocument();
  });
});