import React, { useState, useEffect } from 'react';
import "./Nav.css";


function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" scr="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="Netflix Logo" />
            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />

        </div>
    )
}

export default Nav;
