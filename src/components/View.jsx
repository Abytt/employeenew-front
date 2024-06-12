import React from 'react'

const View = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th scope="col">Emp</th>
                                            <th scope="col">c_descr</th>
                                            <th scope="col">c_date</th>
                                            <th scope="col">c_duration</th>
                                            <th scope="col">trainer_name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>

                                                        <td>{value.c_name}</td>
                                                        <td>{value.c_descr}</td>
                                                        <td>{value.c_date}</td>
                                                        <td>{value.c_duration}</td>
                                                        <td>{value.trainer_name}</td>
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