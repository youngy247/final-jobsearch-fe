const SearchBar = () => {
    return (
    <div className="card">
        <div className="card-body">
            <h1>Find your perfect job</h1>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </div>
    </div>
    )
}

export default SearchBar