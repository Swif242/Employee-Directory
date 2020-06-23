import React, { useState, useEffect } from "react";
import API from "../utils/API";
import TableData from "../components/Table";
import SearchUser from "../components/SearchUser";


function Home() {
    const [users, setUsers] = useState([])
    const [searchForm, setSearchForm] = useState({ text: "  " })

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        API.getUsers().then(res => {
            const employee = res.data.results
            console.log(employee)
            for (let i = 0; i < employee.length; i++) {

                setUsers([
                    ...users,
                    {

                        name: employee[i].name.first,
                        email: employee[i].email,
                        phone: employee[i].phone,
                        age: employee[i].dob.age,
                        picture: employee[i].picture.medium,
                    }
                ]);
            }

        });
    }

    const handleEmployeeChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setSearchForm({ ...searchForm, [name]: value })
    }

    const submitSearch = (event) => {
        event.preventDefault();
        // createTweet(tweetForm);

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, Jeremy!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SearchUser
                            handleEmployeeChange={handleEmployeeChange}
                            submitSearch={submitSearch}
                            searchForm={searchForm} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <TableData users={users} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;