import React from 'react'


function SearchUser(props) {
  const { handleEmployeeChange } = props;

  return (
    <div id="searchForm" className="row">

      <div id="filterbtn" className="dropdown">
        <div>Filter By:</div>
        <select className="btn btn-secondary dropdown-toggle"
          onChange={handleEmployeeChange}>

          <option value="age">Age</option>
        </select>


      </div>

      <div id="sortbtn" className="dropdown">
        <div>Sort By: </div>
        <select className="btn btn-secondary"
          onChange={handleEmployeeChange}>

          <option value="name">
            Name
         </option>
          <option value="age">
            Age
          </option>
        </select>

      </div>

       {/* <button
        type="button"
        className="btn btn-primary"
        onClick={setSearchOption}>
        Submit
        </button> */}
    </div> 
  )
}

export default SearchUser
