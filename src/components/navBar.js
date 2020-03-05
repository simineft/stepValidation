import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    console.log("props => ", props)
    return (
        <>
            <header>
                <nav className="menu">
                    <ul>
                        <li ><Link to="/home"> صفحه اصلی</Link> </li>
                        <li ><Link to="/profile"> پروفایل</Link> </li>
                        <li><Link to="/info"> نمایش اطلاعات</Link> </li>

                    </ul>
                </nav>
            </header>

        </>
    )
}

export default NavBar
