const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <div>
                <h1 className="navbar-brand " href="#">JobSearch</h1>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">All Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Full Time</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Part Time</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contract</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Post a Job</button>
            </div>
        </header>
    )
}

export default Header