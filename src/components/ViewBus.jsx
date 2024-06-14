import React, { useState } from 'react'

const ViewBus = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
  return (
    <div>
        <NavBar/>
         <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Bus Name</th>
                        <th scope="col">Route</th>
                        <th scope="col">Bus No</th>
                        <th scope="col">Driver Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                   <td>{value.busname}</td>
                                   <td>{value.route}</td>
                                   <td>{value.busno}</td>
                                   <td>{value.drivername}</td>
                                   </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewBus