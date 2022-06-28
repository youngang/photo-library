import React from "react";

export default function SearchBar(props){

    const [searchQuery, setSearchQuery] = React.useState('');

    function handleChange(event){
        setSearchQuery(event.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        props.onSubmit(searchQuery);
    }

    return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Search Images" name='searchQuery' onChange={handleChange}/>
        <ion-icon name="search-outline"></ion-icon>
    </form>
    );

}

// when the form is submitted, have a handle search function that takes the query as a parameter
// changes the base url to a search baseurl and returns new image content