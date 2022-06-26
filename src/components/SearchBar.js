import React, { Component } from "react";

function SearchBar() {

    return (
        <form>
            <input type="text" placeholder="Search Images"/>
            <ion-icon name="search-outline"></ion-icon>
        </form>
    )

}

export default SearchBar;