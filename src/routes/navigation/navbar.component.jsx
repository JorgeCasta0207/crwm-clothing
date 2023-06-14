import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import '../navigation/navbar.styles.scss';

const Navbar = () => {
    return(
        <Fragment>
            <div className="navbar">
                <Link className="logo-container" to="/">
                 <CrwnLogo className="logo"/>
                </Link>
                <div>
                    <Link className="nav-link" to="/shop">
                     Shop
                    </Link>

                    <Link className="nav-link" to="/sign-in">
                     Sign In
                    </Link>
                </div>
            </div>
          <Outlet/>
        </Fragment>
    )
}

export default Navbar;
