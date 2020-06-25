import React from 'react'


function SearchUser(props) {
  const { handleSortChange, handleFilterChange } = props;

  return (
    <div id="searchForm" className="row">

      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Filter:</span>
        </div>
        <input
          id="myInput"
          onChange={handleFilterChange}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search by name.." />
      </div>


      {/* <input
          type="text"
          id="myInput"
          onChange={handleFilterChange}
          placeholder="Search for names.."
          title="Type in a name" /> */}

      {/* <div id="filterbtn" className="dropdown">
        <div>Filter By:</div>
        <select className="btn btn-secondary dropdown-toggle"
          onChange={handleEmployeeChange}>

          <option value="age">Age</option>
        </select>
      </div> */}

      <div id="sortbtn" className="dropdown">
        <div>Sort By: </div>
        <select className="btn btn-secondary"
          onChange={handleSortChange}>

          <option >
            Sort
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
