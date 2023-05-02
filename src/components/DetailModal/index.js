import {useEffect, useState} from "react";

const JobDetail = () => {

    const [data, setData] = useState({})
    // const [jobTitle, setJobTitle] = useState()
    // const [company, setCompany] = useState()
    // const [logo, setLogo] = useState()
    // const [salary, setSalary] = useState()
    // const [jobType, setJobType] = useState()
    const [skills, setSkills] = useState([])

    const jobID = 300
    // const skillList = data.skills.map(key => <p>{key}: {skills[key]}</p>)

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
            <h1>{data.job_title} {data.type}</h1>
            <div>
            <img src={data.logo} />
            <p>{data.company}</p>
        </div>
            <h2>Key facts:</h2>
            <div>
            <p>Salary: £{data.salary}</p>
                <p>Type: {data.type}</p>
                <p>Date posted: {data.posted}</p>
                {
                    skills && skills.map((element, i) =>
                        <span key={i}>{element.skill} </span>
                    )
                }


        </div>
        </>
    )

}

export default JobDetail