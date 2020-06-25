import React from 'react'

function TableData(props) {
    const { users } = props;
  

    return (
        <div id="table" className="table-responsive">
            <table id="myTable" className="table table-bordered ">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (<tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name.first}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob.age}</td>
                        <td><img alt="user" src={user.picture.medium} className="img-fluid" /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableData;
