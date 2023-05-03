import './recent/jobs.css'
import { useEffect, useState } from "react"
import { renderToString } from "react-dom/server"

const RecentJobs = ({changeSelectedID, selectedID}) => {
    const [recentJobs, setRecentJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/jobs/recent")
            .then((res) => res.json())
            .then((res) => {
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
                            {window.innerWidth > 768 && <img className="block" width='100' src={job.logo} alt="logo" />}
                        </td>
                        <td>
                            <p className="h4 jobLink" id={job.id} data-bs-toggle="modal" data-bs-target="#jobDetails" onClick={changeSelectedID}>{job.job_title}</p>
                            <p>{job.company}</p>
                        </td>
                        <td className="row-span-2">
                            {job.type ? <button className="btn btn-primary">{job.type}</button> : ""}
                        </td>
                        <td className="row-span-2">{roundedSalary ? `£${roundedSalary}` : ""}</td>
                        <td className="row-span-2">
                            {job.skills.map((skill, index) => {
                                return <button key={index} className="btn btn-secondary">{skill.skill}</button>
                            })}
                        </td>
                    </tr>
                );
            });
    }
    }
    //
    // const jobTitles = document.querySelectorAll(".jobLink")
    // jobTitles.forEach((title) => {
    //     title.addEventListener('click', changeSelectedID)
    // })
    return (
        <div className="container px-5">
            <h3 className='fw-bold py-3'>Most recent jobs</h3>
            <table className="table table-dark table-striped">
                <thead>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default RecentJobs;