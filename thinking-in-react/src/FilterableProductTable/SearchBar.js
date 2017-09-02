import React from 'react'

const SearchBar = ({onSearch, onClickOnlyShowProduct}) =>
    <div className="search-bar">
        <input type="text"
            onKeyUp={onSearch}
            placeholder="Search..."
        />
        <div>
            <input type="checkbox" onChange={onClickOnlyShowProduct}
            /> Only show products in stock
        </div>
    </div>

export default SearchBar