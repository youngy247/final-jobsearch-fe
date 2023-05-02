const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">JobSearch</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">All jobs</a>

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
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header
