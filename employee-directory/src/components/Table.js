import React from 'react'
import Table from 'react-bootstrap/Table';

function TableData(props) {
    const { users } = props;
    console.log(users)
    return (
        <div id="table">
            <Table striped bordered hover>
                <thead>
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
            </Table>
        </div>
    )
}

export default TableData;
