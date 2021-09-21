import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()

  console.log(data)

  return {
    props: {
      users: data
    }
  }
}








export default function Home({users}) {

  // const [users, setUsers] = useState([])
  const [phoneNumber, setPhoneNumber] = useState('')

  const apiKey = 'ac4c9b0e-ecbc-43c3-a785-a6480df2092f';

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
  
    console.log(data)
    // let phoneNo = phoneNumber
    //   let response = await axios.get(`https://api.kelvindata.com/rest/v1/search-v2?phone=${phoneNo}&apiKey=${apiKey}`, {

    //   })

    //   if(response){
    //     setDetails(response.data)
    //   }
    //   else{
        
    //   }

    //   console.log(response.data)

  }

  return (
    <div className="app">
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      {/* App title section */}
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-2" />
            <u>Online directory</u>
          </div>
        </div>
      </div>

      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input className="form-control form-control-lg border-0  bg-transparent rounded" type="text"  placeholder="Enter phone number .."  />
            </div>

            <div className="col-auto px-0 mx-0 mr-2">
              <button type="button" className="btn btn-primary" onClick={getData}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mx-4 border-black-25 border-bottom" />
      {/* View options section */}
      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="all" selected>All</option>
            <option value="completed">Male</option>
            <option value="active">Female</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="added-date-asc" selected>Added date</option>
            <option value="due-date-desc">Due date</option>
          </select>
          <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending" />
          <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending" />
        </div>
      </div>

      <div className="row mx-1 px-5 pb-3 w-80">
       

        <table id="customers">
<tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Gender</th>
  <th style={{width: '200px'}}>Email(s)</th>
  <th>Phone No.</th>
</tr>
{users.length > 0? users.map(detail => (
              
              <tbody>
               
                <tr>
                  <td>{detail.name.first}</td>
                  <td>{detail.name.last}</td>
                  <td>{detail.gender}</td>
                  <td>{detail.email}</td>
                  <td>{detail.phone}</td>
                </tr>

              </tbody>
              )): <h1>Sorry, no records were found for that number</h1>}

</table>

{/* 
          <table className="table w-90">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col" style={{width: '150px'}}>Email</th>
                <th scope="col">Phone No.</th>
              </tr>
            </thead>
            {details.map(detail => (
              
            <tbody>
             
              <tr>
                <th scope="row">1</th>
                <td>{detail.name.first}</td>
                <td>{detail.name.last}</td>
                <td>{detail.gender}</td>
                <td>{detail.emailAddresses}</td>
                <td>{detail.phoneAccounts.uri}</td>
              </tr>

            </tbody>
            ))}
          </table> */}
       


       

      </div>
    </div>
    <style jsx>{`
       #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      #customers tr:nth-child(even){background-color: #f2f2f2;}
      
      #customers tr:hover {background-color: #ddd;}
      
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
      }
      `}</style>
  </div>
  )
}
