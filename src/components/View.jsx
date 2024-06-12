import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {

    const [data, changedata] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8080/View").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)

            }
        ).catch().finally()
    }
    useEffect(() => { fetchdata() }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th scope="col">Emp_name</th>
                                            <th scope="col">Emp_code</th>
                                            <th scope="col">Emp_mobile</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>

                                                        <td>{value.Emp_name}</td>
                                                        <td>{value.Emp_code}</td>
                                                        <td>{value.Emp_mobile}</td>

                                                    </tr>
                                                }
                                            )

                                        }




                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View