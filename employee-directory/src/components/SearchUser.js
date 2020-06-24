import React from 'react'

function SearchUser(props) {

  const { handleEmployeeChange, submitSearch } = props;

  return (
    <div id="searchForm" className="row">
      <div className="dropdown">
        <div>Filter By:</div>
        <select className="btn btn-secondary dropdown-toggle"
          onChange={handleEmployeeChange}>
          <option value="age">Age</option>
        </select>


      </div>

      <div className="dropdown">
        <div>Sort By: </div>
        {/* <button className="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onSelect={handleEmployeeChange}>
          Sort By:
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Name</a>
          <a className="dropdown-item" href="#">Age</a>
        </div> */}
        <select className="btn btn-secondary" onChange={handleEmployeeChange}>Sort By:
          <option value="name">
            Name
         </option>
          <option value="age">
            Age
          </option>
        </select>

      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={submitSearch}>
        Submit
        </button>
    </div>
  )
}

export default SearchUser
