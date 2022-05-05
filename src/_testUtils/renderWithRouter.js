import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
  return (
    <MemoryRouter initialEntries={initialRoutes}>
      {children}
    </MemoryRouter>
  );
};

function renderWithRouter(component, options) {
  const initialRoutes = (options && options.initialRoutes)
    ? options.initialRoutes
    : ['/'];
  return render(component, { wrapper: (args) => 
    MemoryRouterWithInitialRoutes({
      ...args,
      initialRoutes
    }), ...options
  });
};

export default renderWithRouter;