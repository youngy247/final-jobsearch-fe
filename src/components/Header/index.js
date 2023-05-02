const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center py-1 px-1">
            <div>
                <h1 className="navbar-brand mx-3" href="#">JobSearch</h1>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">All Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Full time</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Part time</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contract</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit">Post a job</button>
            </div>
        </header>
    )
}

export default Header
