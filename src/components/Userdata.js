import React, { Component } from 'react'

export default class Userdata extends Component {
    constructor(props){
        super(props)
     
    }
  
  render() {
    return (

      <div>
        <h2>Employee data</h2>
        <table border="2">
            <thead>
                
                <tr><th>Id</th><th>Name</th><th>Age</th><th>Salary</th></tr>
                
            </thead>
            <tbody>
                {this.props.empdata.map((employee,index)=><tr key={employee.id}>
                    <td>{index+1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.salary}</td>
                </tr>)}
            </tbody>
        </table>
        <h2>User Data</h2>
        <ul>
          {this.props.userdata.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
      </div>  
     
     
    )
  }
}
