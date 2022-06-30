import React from "react";

export default function SearchBar(props){

    const [searchQuery, setSearchQuery] = React.useState('');

    function handleChange(e){
        setSearchQuery(e.target.value);
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