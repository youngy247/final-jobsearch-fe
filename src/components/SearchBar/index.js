import './index.css';

const SearchBar = () => {
    return (
        <div className="p-sm-2 p-md-5 mx-auto searchBar">
            <div className="continer w-75 mx-sm-2 mx-md-auto px-sm-2 px-md-5">
                <p className="fs-1 my-2 mx-">Find your perfect job</p>
                <div className="row">
                    <input className="form-control mx-auto col-12" type="search" placeholder="Search"
                           aria-label="Search"></input>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="FullTime"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Full time</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="PartTime"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Part time</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Contracts"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Contracts</label>
                </div>
                <div className="row col-sm-1 col-md-1">
                    <button type="button" className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
