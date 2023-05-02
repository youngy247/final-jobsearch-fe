import {useEffect, useState} from "react";

const JobDetail = () => {

    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])

    const jobID = 412

    useEffect(() => {
        fetch('http://localhost:8080/jobs/' + jobID)
            .then (res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
            })
    }, [])

    return (
        <>
            <p>{data.job_title} - {data.company}</p>
            <h1>{data.job_title}</h1>
            <span> {data.type}</span>

            <div>
                <img src={data.logo} />
                <span>{data.company}</span>
            </div>

            <h2>Key facts:</h2>

            <div>
                <p>Salary: £{data.salary ?? "Not specified"}</p>
                <p>Type: {data.type ?? "Not specified"}</p>
                <p>Date posted: {data.posted}</p>
                {
                    skills && skills.map((element, i) =>
                        <span key={i}>{element.skill} </span>
                    )
                }
                <h2>Job Description:</h2>
                <p>{data.job_description}</p>
            </div>
        </>
    )
}
export default JobDetail