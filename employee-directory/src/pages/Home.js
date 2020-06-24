import React, { useState, useEffect } from "react";
import API from "../utils/API";
import TableData from "../components/Table";
import SearchUser from "../components/SearchUser";
import Jumbotron from '../components/Jumbotron'

function Home() {
    const [users, setUsers] = useState([])
    const [sortOption, setSortOption] = useState("name")

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        API.getUsers().then(res => {
            const employee = res.data.results
            setUsers(employee)
        });
    }

    const handleEmployeeChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        // setSearchForm({ ...searchForm, [name]: value })
        console.log(value)

        if (value === "age") {

            setSortOption([
                ...sortOption,

                users.sort(function (a, b) {
                    return a.dob.age - b.dob.age
                })

            ])
        }

    }

    const submitSearch = (event) => {
        event.preventDefault();

    }

    return (
        <>
            <div id="container" className="container-fluid">
                <Jumbotron />
                <div className="row">
                    <div id="searchRow" className="col-12">
                        <SearchUser
                            handleEmployeeChange={handleEmployeeChange}
                            submitSearch={submitSearch}
                        // searchOption={searchOption} 
                        />
                    </div>
                </div>
                <div id="tableRow" className="row">
                    <div className="col-12">
                        <TableData users={users} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;