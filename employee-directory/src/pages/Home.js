import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchUser from "../components/SearchUser";


function Home() {
    const [users, setUsers] = useState([])
    const [searchForm, setSearchForm] = useState({ text: "  " })

    useEffect(() => {
        loadUsers();
    })

    const loadUsers = () => {
        API.getUsers().then(res => {
            console.log(res.data)
            setUsers([
                ...users, 
                {
                    name: res.data.name,
                    email: res.data.email,
                    age: res.data.dob.age,
                    picture: res.data.picture.medium,
                }
            ]);
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
                    <div className="col-md-6">
                        <Table users={users}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;