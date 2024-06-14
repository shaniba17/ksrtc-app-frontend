import React, { useState } from 'react'

const SearchBus = () => {
    const [data, setData] = useState(
        {
            "busname": ""
        }
    )

    const [result, setresult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response) => {
                setresult(response.data)
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )

    }
  return (
    <div>
         <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>
                        <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Bus Name</th>
                                <th scope="col">Route</th>
                                <th scope="col"> Bus No</th>
                                <th scope="col">Driver Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map(
                                (value, index) => {
                                    return <tr>
                                        <td>{value.busname}</td>
                                        <td>{value.route}</td>
                                        <td>{value.busno}</td>
                                        <td>{value.drivername}</td>
                                    </tr>
                                }
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchBus