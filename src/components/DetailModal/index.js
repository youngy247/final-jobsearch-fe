import {useEffect, useState} from "react";

const JobDetail = () => {

    const [data, setData] = useState({})
    // const [jobTitle, setJobTitle] = useState()
    // const [company, setCompany] = useState()
    // const [logo, setLogo] = useState()
    // const [salary, setSalary] = useState()
    // const [jobType, setJobType] = useState()
    const [skills, setSkills] = useState({})

    const jobID = 300

    useEffect(() => {
        fetch('http://localhost:8080/jobs/' + jobID)
            .then (res => res.json())
            .then(data => {
                setData(data)
            })
    })
    return (
        <>
            <p>{data.job_title} - {data.company}</p>
            <h1>{data.job_title} {data.type}</h1>
            <img src={data.logo} />
            <p>{data.company}</p>

        </>
    )

}

export default JobDetail