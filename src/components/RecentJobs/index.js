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
        const tbody = document.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = createRecentTable(recentJobs).join("");
        }
    }, [recentJobs]);

    function createRecentTable(data) {
        if (!data) {
            return [];
        } else {
            return data.map((job, key) => {
                return renderToString(
                    <tr key={key}>
                        <td scope="row">
                            <img className="block" src={job["logo"]} alt="logo" />
                        </td>
                        <td>
                            <p className="h4">{job["job_title"]}</p>
                            <p>{job.company}</p>
                        </td>
                        <td className="row-span-2">{job.type}</td>
                        <td className="row-span-2">{job.salary}</td>
                        <td className="row-span-2">
                            {job.skills.map((skill) => {
                                return skill.skill;
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
                <tr>
                    <th className="col-6" colSpan="2" scope="col">
                        Job Title/ Company
                    </th>
                    <th className="col-2" scope="col">
                        Type
                    </th>
                    <th className="col-2" scope="col">
                        Salary
                    </th>
                    <th className="col-2" scope="col">
                        Skills
                    </th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default RecentJobs;
