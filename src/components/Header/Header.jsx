import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import LogoS from "../../assets/images/logo.jpg";
// import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";

function Header() {
    const [{ user }] = useStateValue();
    return (
        <header className="header">
            <div className="header__left">
                <img src={LogoS} alt="" className="platform__logo" />
            </div>
            {/* <div className="header__search">
        <Search />
        <input type="text" placeholder="search slack clone" />
      </div> */}
            <div className="header__search">Stugether</div>
            <div className="header__right">
                <Avatar
                    className="header__avatar"
                    alt={user.displayName}
                    src={user.photoURL}
                />
            </div>
        </header>
    );
}

export default Header;
