import React from 'react'
import Header from './header'
import lgraph from '../assets/lgraph.png'
import pgraph from '../assets/pgraph.png'
import imgs from '../assets/4.jpg'
import user1 from '../assets/2.png'
import user2 from '../assets/1.png'
import user3 from '../assets/5.png'
import thumb from '../assets/6.png'
import videos from '../assets/video.mp4'

// Function main section is responsible for the dashboard main section contain almost all datas in the ui 
function Mainsection() {
    return (
        <div>
            {/* Calling Header */}
            <Header />
            <div className="main-contents">
                <div className="overview-btn">
                    <span><h3>Overview</h3></span>
                    <span><button className="funds-btn">Add Funds <i className="fa fa-plus-circle"></i></button></span>
                </div>

                {/* Row is for displaying card datas of graph */}
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card cols">
                                    <div className="card-header">
                                        <span>Statistics</span>
                                        <span><select className="form-control"><option>Last 6 Months</option><option>Last Year</option></select></span>
                                    </div>
                                    <div className="card-body">
                                        <img src={lgraph} alt="Avatar" className="charts" />
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card cols">
                                    <div className="card-header">
                                        <span>Sales Distribution</span>
                                    </div>
                                    <div className="card-body">
                                        <img src={pgraph} alt="Avatar" className="charts" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Card for shoing the reference table list */}
                        <div className="row ">
                            <div className="col-md-12 comms">
                                <div className="card cols">
                                    <div className="card-header">
                                        <h5>Referer</h5>
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Location</th>
                                                    <th>View</th>
                                                    <th>Sales</th>
                                                    <th>Convertion</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>google.com</td>
                                                    <td>3746</td>
                                                    <td>752</td>
                                                    <td>43%</td>
                                                    <td>$15223</td>
                                                </tr>
                                                <tr>
                                                    <td>facebook.com</td>
                                                    <td>3746</td>
                                                    <td>752</td>
                                                    <td>43%</td>
                                                    <td>$15223</td>
                                                </tr>
                                                <tr>
                                                    <td>twitter.com</td>
                                                    <td>3746</td>
                                                    <td>752</td>
                                                    <td>43%</td>
                                                    <td>$15223</td>
                                                </tr>
                                                <tr>
                                                    <td>direct,email</td>
                                                    <td>3746</td>
                                                    <td>752</td>
                                                    <td>43%</td>
                                                    <td>$15223</td>
                                                </tr>
                                                <tr>
                                                    <td>linked.com</td>
                                                    <td>3746</td>
                                                    <td>752</td>
                                                    <td>43%</td>
                                                    <td>$15223</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>

                    {/* For showing the users and social media sections */}
                    <div className="col-md-4">
                        <div className="">
                            <div className="card  cols">

                                <div className="user-body">
                                    <img src={imgs} alt="Avatar" className="round-image-dash" />
                                    <h6 className="name-head"><b>Nick Heraseminka</b></h6>
                                    <span className="states">United States</span>
                                </div>
                                <div className="social-media">
                                    <span><i className="fa fa-instagram social-icons"></i></span>
                                    <span><i className="fa fa-twitter social-icons"></i></span>
                                    <span><i className="fa fa-facebook social-icons"></i></span>
                                    <span><i className="fa fa-envelope-o social-icons"></i></span>
                                </div>
                                <div className="users-div">
                                    <span>Our Users</span>
                                    <span><i className="fa fa-ellipsis-h"></i></span>
                                </div>
                                <div className="users-list-div">
                                    <img src={user1} alt="Avatar" className="round-image-user" />
                                    <p><b>Drew James</b> <br /> <span className="small-state">United State Mobile : 871.567.4877</span></p>
                                    <span></span>
                                </div>

                                <div className="users-list-div">
                                    <img src={user2} alt="Avatar" className="round-image-user" />
                                    <p><b>Drew James</b> <br /> <span className="small-state">United State Mobile : 871.567.4877</span></p>
                                    <span></span>
                                </div>

                                <div className="users-list-div">
                                    <img src={user3} alt="Avatar" className="round-image-user" />
                                    <p><b>Drew James</b> <br /> <span className="small-state">United State Mobile : 871.567.4877</span></p>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* div for displaying video */}
                            <div className="card cols">
                                <div className="card-header prd-vid">
                                    <span>Product Video</span>
                                    <span><i className="fa fa-ellipsis-h"></i></span>
                                </div>
                                <div className="card-body">
                                    <video className="videoInsert" poster={thumb} controls>
                                        <source src={videos} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                    </video>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mainsection
