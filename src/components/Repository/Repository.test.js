import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Repository from "./Repository.js";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});

const repo = { 
    id: "r1", 
    name: "Repo 1", 
    description: "This is repository 1", 
    html_url: "https://github.com/godaddy/lazy-social-buttons",
    language: "JavaScript", 
    forks: 4, 
    open_issues: 5, 
    watchers: 10 
};

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "r1",
        state: repo,
    })
}));

it("should render repository details", () => {
    const { container: wrapper } = render(
        <BrowserRouter>
            <Repository />
        </BrowserRouter>,
        container
    );

    expect(wrapper.querySelectorAll(".field-name").length).toBe(7);
    expect(wrapper.querySelectorAll(".field-value").length).toBe(7);

});