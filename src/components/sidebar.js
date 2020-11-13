import React from 'react'

// Function sidebar holds the sidebar menus and list.
function Sidebar() {
    return (

        <div className="sidebar">
            <h5>IMPEKABLE</h5>
            <ul className="side-contents">
                <li><a className="side-text" ><i className="fa fa-home"></i> Home</a></li>
                <li className="active"><a className="side-text" ><i className="fa fa-bar-chart"></i> Dashboard</a></li>
                <li><a className="side-text"><i className="fa fa-envelope"></i> Inbox</a></li>
                <li><a className="side-text"><i className="fa fa-barcode"></i> Products</a></li>
            </ul>

        </div>

    )
}

export default Sidebar
