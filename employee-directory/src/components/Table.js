import React from 'react'
import Table from 'react-bootstrap/Table';

function TableData(props) {
    const { users } = props;
    return (
        <div id="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (<tr>
                        {/* <td key={index}>{user.index}</td> */}
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.age}</td>
                        <td>{user.picture}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableData;
