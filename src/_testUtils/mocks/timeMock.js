import { advanceBy, advanceTo, clear } from "jest-date-mock";

class TimeMock {
  constructor() {
    this.time = Date.now();
    this.FRAME_TIME = 1000;
    advanceTo(this.time);
  }

  travel(time = this.FRAME_TIME) {
    let secondsLeft = time / this.FRAME_TIME;
    while (secondsLeft > 0) {
      this.time += this.FRAME_TIME
      advanceBy(this.FRAME_TIME);
      jest.advanceTimersByTime(this.FRAME_TIME);
      secondsLeft -= 1;
    };
  };

  loopTravel(time, loop) {
    loop.forEach(part => part.progress += time / 10000);
  }

  teardown() {
    clear();
  };
};

export default TimeMock;