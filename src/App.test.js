import { render } from '@testing-library/react';
import App from "./App.js";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});

it("should render app", () => {
  const { container: wrapper } = render(<App />, container);
  expect(wrapper.querySelector(".app-header")).toBeTruthy();
});