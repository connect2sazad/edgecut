import React from "react";
import { Link } from "react-router-dom";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {
                'HOME': '/',
                'ABOUT': '/about',
                'FURNITURES': '/furnitures',
                'BLOG': '/blog',
                'CONTACT US': '/contact-us',
            }
        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        const { items } = this.state;

        return (
            <header className="header_section long_section px-0">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="index.html">
                        <span>
                            Edgecut
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav">
                                {Object.entries(items).map(([label, path]) => (
                                    <MenuItem key={label} label={label} path={path} />
                                ))}
                            </ul>
                        </div>
                        <div className="quote_btn-container">
                            <Link to="">
                                <span>
                                    Login
                                </span>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </Link>
                            <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default MenuBar;


const MenuItem = ({ label, path }) => {
    return (
        <li className="nav-item">
            <Link to={path} className="nav-link">
                {label}
            </Link>
        </li>
    );
}