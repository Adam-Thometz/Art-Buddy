import MoodMeter from "./MoodMeter";
import App from "App";

import { render } from "test/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { moodMeter } from "data/_activities/activityList";
import { GREEN_FILTER, RED_FILTER } from "data/mood-meter/batteries";
import urls from "routes/routeUrls";

describe("MoodMeter component", () => {
  window.localStorage.setItem(`visited-${moodMeter.lsKey}`, true);
  it("renders without crashing", () => {
    render(<MoodMeter />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<MoodMeter />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should select valence", () => {
    render(<MoodMeter />);
    const valenceOptions = screen.getAllByTestId(/face/);
    userEvent.click(valenceOptions[0]);
    expect(screen.getByTestId("face2")).toHaveClass("selected-face");

    userEvent.click(valenceOptions[1]);
    expect(screen.getByTestId("face1")).toHaveClass("selected-face");
    expect(screen.getByTestId("face2")).not.toHaveClass("selected-face");
  });

  it("should select energy", () => {
    render(<MoodMeter />);
    const energyOptions = screen.getAllByTestId(/battery/);
    userEvent.click(energyOptions[2]);
    const firstClicked = screen.getAllByTestId("bar")[2];
    const { filter: filter1 } = window.getComputedStyle(firstClicked);
    expect(filter1).toBe(RED_FILTER);

    userEvent.click(energyOptions[0]);
    const secondClicked = screen.getAllByTestId("bar")[0];
    const { filter: filter2 } = window.getComputedStyle(secondClicked);
    expect(filter2).toBe(GREEN_FILTER);
    const firstClickedAgain = screen.getAllByTestId("bar")[2];
    const { filter: filter3 } = window.getComputedStyle(firstClickedAgain);
    expect(filter3).not.toBe(RED_FILTER);
  });

  it("should show a mood after selecting valence and energy", () => {
    // below is rendering the MoodMeter component. This is to get the Popup
    render(<App />, { initialRoutes: [urls.moodMeterUrl] });

    const valenceOptions = screen.getAllByTestId(/face/);
    userEvent.click(valenceOptions[0]);
    const energyOptions = screen.getAllByTestId(/battery/);
    userEvent.click(energyOptions[2]);

    expect(screen.getByText("YOUR MOOD IS...")).toBeInTheDocument();
    expect(screen.getByText("Happy")).toBeInTheDocument();
  });
});
