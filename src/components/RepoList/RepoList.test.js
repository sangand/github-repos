import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import RepoList from "./RepoList.js";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});


it("should render all repositories", async () => {
    const repos = [
        { id: "r1", name: "Repo 1", description: "This is repository 1" },
        { id: "r2", name: "Repo 2", description: "This is repository 2" },
        { id: "r3", name: "Repo 3", description: "This is repository 3" },
    ];
    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve({
            json: () => Promise.resolve(repos)
        })
    );

    let wrapper;
    await act(async () => {
        wrapper = render(
            <BrowserRouter>
                <RepoList />
            </BrowserRouter>,
            container
        ).container;
    });

    expect(wrapper.querySelectorAll(".repo-item").length).toBe(3);
    for (const repo of repos) {
        expect(screen.getByText(repo.name)).toBeTruthy();
    }

    global.fetch.mockRestore();
});