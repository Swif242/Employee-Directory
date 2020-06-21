import React from 'react'

function SearchUser(props) {

    const {handleEmployeeChange, submitSearch, searchForm } = props;

    return (
        <form>
        <input
          onChange={handleEmployeeChange}
          name="text"
          placeholder="Search for an Employee"
        />
        <button
          disabled={!searchForm.text}
          onClick={submitSearch}
        >
          Submit
        </button>
      </form>
    )
}

export default SearchUser
