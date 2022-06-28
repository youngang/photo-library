import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

export default function App(){
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [baseUrl, setBaseUrl] = useState('https://api.pexels.com/v1/curated?per_page=10');
  const APIKEY = "563492ad6f917000010000011d926482db804d428065948e1fd51837";

  function handlePrevPage(){
    console.log("handle prev page");
    // console.log('PREV PAGE', prevPage);
    setBaseUrl(prevPage);
  }

  function handleNextPage(){
    console.log("handle next page");
    // console.log("NEXT PAGE", nextPage);
    setBaseUrl(nextPage);
  }

  function handleSpecificPageChange(pageNum){
    console.log("handling particular number");
    // console.log(pageNum);
    setBaseUrl('https://api.pexels.com/v1/curated?page=' + pageNum + '&per_page=10');
  }

  function handleSearch(query){
    console.log("search time");
    // console.log("QUERY", query);
    // console.log("https://api.pexels.com/v1/search?query=" + query + "&per_page=10");
    setBaseUrl("https://api.pexels.com/v1/search?query=" + query + "&per_page=10");
  }

  useEffect(() => { //sync state with outside API
    async function fetchData(){
      setLoading(true);
      console.log("FETCHING DATA")
      const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: APIKEY
        }
      });
      const data = await res.json();
      console.log("DATA", data);
      setLoading(false);
      setImages(data.photos);
      if(data.prev_page){
        setPrevPage(data.prev_page);
      }
      setNextPage(data.next_page);
    }
    fetchData();
    }, [baseUrl]); //useEffect will run every time this variable is changed
  
    console.log('images', images);

    return (
    <div className="container">
      <div className="header">
        <h1 className="title">Gallery</h1>
        <SearchBar onSubmit ={handleSearch}/>
      </div>
      <Gallery images={images} loading={loading} />
      <Pagination 
        handlePrevPage={handlePrevPage} 
        handleNextPage={handleNextPage}
        handleSpecificPageChange={num => handleSpecificPageChange(num)}
      />
    </div>
    );
}