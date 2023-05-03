import './index.css'
import React, {useState} from "react";
import RecentJobs from "../RecentJobs";

const SearchBar = ({setURL,URL}) => {

    const [searched, setSearched] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearched(true)
    }

    return (
        <>
            <div className="container-fluid searchBar p-4 mb-4">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <p className="fs-1 my-2 mx-auto">Find your perfect job</p>
                        <div className="col-12">
                            <input className="form-control mx-auto col-12" type="text" placeholder="Search"
                                   aria-label="Search" onChange={(e) => setURL(e.target.value)}></input>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                   value="FullTime"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Full time</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                   value="PartTime"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Part time</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                   value="Contracts"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Contracts</label>
                        </div>
                        <div className="col-sm-1 col-md-1">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <RecentJobs URL={URL}/>
        </>
    )
}

export default SearchBar
