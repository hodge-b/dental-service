import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders the Button component", () => {
    render(<Button />);
  });
});
