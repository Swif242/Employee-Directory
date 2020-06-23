import React from 'react'
// import Table from 'react-bootstrap/Table';

function Table(props) {
    const {users} = props;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {users.map(user => (<tr>
                        <td>${user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.picture}</td>
                    </tr>
                    ))} */}
                </tbody>
            </Table>
        </div>
    )
}

export default Table;
