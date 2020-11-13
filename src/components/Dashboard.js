import React from 'react'
import Mainsection from './mainsection'
import Sidebar from './sidebar'
import "./styles.css"

// Function dashboard hold the dashboard ui with sidebar and main content
function Dashboard() {
    return (
        <div className="rootClass">
            <div className="wrapper">

                <Sidebar />

                <div className="main_content">
                    <Mainsection />
                </div>


            </div>
        </div>
    )
}

export default Dashboard
