import './recent/jobs.css'

const RecentJobs = () => {

    return (
        <div className='container'>
            <table className="table table-dark table-striped">
                <thead>
                <tr >
                    <th className='col-6' scope="col">Job Title/ Company</th>
                    <th className='col-2' scope="col">Type</th>
                    <th className='col-2' scope="col">Salary</th>
                    <th className='col-2' scope="col">Skills</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" className="jobLink" data-bs-toggle="modal" data-bs-target="#jobDetails">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row" className="jobLink" data-bs-toggle="modal" data-bs-target="#jobDetails">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecentJobs
