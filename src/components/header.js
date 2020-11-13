import React from 'react'
import imgs from '../assets/1.png'

// Function Header for header datas
function Header() {
    return (

        <div className="header">
            <div className="drawer-class">
                <span><i className="fa fa-bars"></i></span>
                <span className="search-icon-style"><i className="fa fa-search"></i></span>
                <span><input className="search-field" placeholder="Search transaction, invoice or help" /></span>
            </div>
            <div>
            <span className="comms"><i className="fa fa-bell"></i></span>
            <span className="search-icon-style comms">John Doe <i className="fa fa-angle-down"></i></span>
            <span className="search-icon-style"><img src={imgs} alt="Avatar" className="round-image" /></span>
            </div>

        </div>

    )
}

export default Header
