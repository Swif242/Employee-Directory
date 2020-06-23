import React from 'react'

function SearchUser(props) {

  const { handleEmployeeChange, submitSearch, searchForm } = props;

  return (
    <div id="searchForm" className="row">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onChange={handleEmployeeChange}>
          Filter By:
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Age</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onChange={handleEmployeeChange}>
          Sort By:
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Name</a>
          <a class="dropdown-item" href="#">Age</a>
        </div>
      </div>


      {/* <input
        onChange={handleEmployeeChange}
        name="text"
        placeholder="Search for an Employee"
      /> */}
      <button
        type="button"
        class="btn btn-primary"
        disabled={!searchForm.text}
        onClick={submitSearch}>
        Submit
        </button>
    </div>
  )
}

export default SearchUser
