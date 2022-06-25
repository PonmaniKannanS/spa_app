import React from "react";

const Navbar = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/create">Create New</a>
            <a href="Contact">Contact</a>
            <a href="about">About</a>
        </div>
    )
}
export default Navbar;