import { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";

const RecentJobs = () => {
    const [recentJobs, setRecentJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/jobs/recent")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setRecentJobs(res);
            });
    }, []);

    useEffect(() => {
        const thead = document.querySelector("thead")

        thead.innerHTML = createTableHeader()

        const tbody = document.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = createTableRows(recentJobs).join("");
        }
    }, [recentJobs]);

    const createTableHeader = () => {
        return renderToString(
            <tr>
                <th className="col-5" colSpan="2" scope="col">
                    Job Title/ Company
                </th>
                <th className="col-2" scope="col">
                    Type
                </th>
                <th className="col-2" scope="col">
                    Salary
                </th>
                <th className="col-3" scope="col">
                    Skills
                </th>
            </tr>
        )
    }

    const createTableRows = (data) => {
        if (!data) {
            return [];
        } else {
            return data.map((job, key) => {
                const roundedSalary = job.salary ? Number(job.salary.toPrecision(2)) : "";
                return renderToString(
                    <tr key={key}>
                        <td scope="row">
                            <img className="block" width='100' src={job.logo} alt="logo" />
                        </td>
                        <td>
                            <p className="h4">{job.job_title}</p>
                            <p>{job.company}</p>
                        </td>
                        <td className="row-span-2">
                            {job.type ? <button className="btn btn-primary">{job.type}</button> : ""}
                        </td>
                        <td className="row-span-2">{roundedSalary ? `£${roundedSalary}` : ""}</td>
                        <td className="row-span-2">
                            {job.skills.map((skill) => {
                                return <button className="btn btn-secondary">{skill.skill}</button>
                            })}
                        </td>
                    </tr>
                );
            });
    }
    }

    return (
        <div className="container">
            <table className="table table-dark table-striped">
                <thead>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default RecentJobs;