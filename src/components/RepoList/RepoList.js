import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RepoList.css";

const RepoList = () => {
    const [repos, setRepos] = useState();

    const fetchRepos = async () => {
        const url = "https://api.github.com/orgs/godaddy/repos";
        const response = await fetch(url);
        const data = await response.json();
        setRepos(data);
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        repos ? (
            <ul>
                {repos.map(repo => (
                    <li key={repo.id} className="repo-item">
                        <Link to={`/${repo.id}`} state={repo} title={repo.description}>
                            {repo.name}
                        </Link>
                    </li>
                ))}
            </ul>
        ) : (
            <div className="repo-spinner">Loading repositories...</div>
        )
    );
};

export default RepoList;