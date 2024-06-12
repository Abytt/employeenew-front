import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, setdata] = useState(
        {

            "Emp_name": "",

        }
    )
    const [result, changeresult] = useState([])
    const InputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Search", data).then(
            (response) => {

                changeresult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
    }
    return (
        <div>
<NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label" >Employee Name</label>
                                <input type="text" className="input form-control" name='trainer_name' value={data.Emp_name} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning" onClick={readvalue}>Search</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
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
    )
}

export default Search