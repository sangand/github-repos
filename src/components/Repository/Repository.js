import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Repository.css";

const Repository = () => {
    const { state } = useLocation();
    const { name, description, html_url, language, forks, open_issues, watchers } = state || {};
    const fields = [
        { key: "Title", value: name },
        { key: "Description", value: description },
        { key: "GitHub URL", value: html_url, isLink: true },
        { key: "Language", value: language },
        { key: "Forks", value: forks },
        { key: "Open Issues", value: open_issues },
        { key: "Watchers", value: watchers },
    ];
    return (
        <div className="repo-details">
            {fields.filter(({ value }) => !!value).map(({ key, value, isLink }) => (
                <Fragment key={key}>
                    <span className="field-name">{key}</span>
                    <span className="field-value">
                        {isLink ? 
                            <a href={value} target="_blank" rel="noreferrer">{value}</a> 
                            : value}
                    </span>
                </Fragment>
            ))}
        </div>
    );
};

export default Repository;