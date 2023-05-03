import React, { useState, useEffect } from 'react';

const DetailModal = ({selectedID}) => {

    const [data, setData] = useState({})
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/jobs/' + selectedID)
            .then (res => res.json())
            .then(data => {
                setData(data)
                setSkills(data.skills)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    }, [selectedID])


    return (
        <>

            <div className="modal fade" id="jobDetails" tabIndex="-1" aria-label="Job Details"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title fs-6">
                                <strong>{data.job_title} - {data.company}</strong></p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {loading && <p>Loading...</p>}
                            {error && <p>Error: {error.message}</p>}
                            {!loading && !error && (
                                <div className="container">

                                    <div className="d-flex flex-row bg-primary text-white py-4">
                                        <p className="mx-4"><strong>{data.job_title}</strong></p>
                                        <p className="bg-success text-white rounded-pill px-1"><strong>{data.type}</strong>
                                        </p>
                                    </div>
                                    <div>
                                        {data.logo && <img src={data.logo}/>}
                                        <p><strong>{data.company}</strong></p>
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
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailModal;
