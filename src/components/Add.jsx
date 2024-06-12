import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data, setdata] = useState([
        {
            "Emp_name": String,
            "Emp_code": String,
            "Emp_mobile": String
        }

    ])
    const InputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Add", data).then(
            (response) => {
                if (response.data.Status == "Success") {
                    alert("Data added Successfully")
                } else {
                    alert("Data Not added")
                }
            }
        ).catch().finally()
    }
        return (
            <div>

                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="label form-label">Employee Name</label>
                                    <input type="text" className="input form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="label form-label">Employee code</label>
                                    <input type="text" className="input form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="label form-label">Employee Mobile</label>
                                    <input type="text" className="input form-control" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Add