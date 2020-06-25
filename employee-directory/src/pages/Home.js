import React, { useState, useEffect } from "react";
import API from "../utils/API";
import TableData from "../components/Table";
import SearchUser from "../components/SearchUser";
import Jumbotron from '../components/Jumbotron'

function Home() {
    const [users, setUsers] = useState([])
    const [sortOption, setSortOption] = useState("name");
    const [filterOption, setFilterOption] = useState("");
    const [filteredState, setFilteredState] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = () => {
        API.getUsers().then(res => {
            const employee = res.data.results
            setUsers(employee)
        });

    }

    const handleSortChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
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

    const handleFilterChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFilterOption(
            {
                ...filterOption,
                [name]: value
            }
        )
        console.log(value)
        // Loop through all table rows, and hide those who don't match the search query
        for (let i = 0; i < users.length; i++) {


            if (value === users[i].name.first) {


                setFilteredState([

                    ...filteredState,
                    users[i]
                ])
                console.log("it worked")
            }
            else if(value === ""){

                setFilteredState([])
                console.log("not found")
            }
        }
    }






    return (
        <>
            <div id="container" className="container-fluid">
                <Jumbotron />
                <div className="row">
                    <div id="searchRow" className="col-12">
                        <SearchUser
                            handleSortChange={handleSortChange}
                            handleFilterChange={handleFilterChange}
                        // searchOption={searchOption} 
                        />
                    </div>
                </div>
                <div id="tableRow" className="row">
                    <div className="col-12">
                        <TableData
                            users={filteredState.length > 0 ? filteredState : users}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;