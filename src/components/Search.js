import React from 'react'
import '../App.css'
import { getTopUSNews } from '../service'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Search = () => {

  const [resultOfSearch,setResultOfSearch] = useState()
  const [search,setSearch] = useState('')
  const placeholder = 'https://www.fillmurray.com/640/360'

  useEffect(() => {
    getTopUSNews().then(res => {
       //console.log(res.data.articles[0])
       setResultOfSearch(res.data.articles)
    })
},[])

    return (
        <>
              <h4 className='search-h4'>Search top news from Great Britain by term:</h4>
              <input className='searchPage' type='search' placeholder='Looking for a news...' onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />

        <div className='homepage-section-search'>
             {
                resultOfSearch?.filter((value) => value?.title.toLowerCase().includes(search)) 
                               .map(({title,description,urlToImage,source}) => 
                                    <div className='card' key={title}>
                                      <h3>{title}</h3>
                                      <img src={urlToImage ? urlToImage : placeholder} alt='alt' />
                                      <p>{description}</p>
                                      <Link to={`/search/${source?.id}`} className='more' >More...</Link>
                                    </div>
                  ) 
                }    <br/>   
                     <br/>                     
                  <div>
                  <h1 className='exist'>Match doesn't exist</h1>
                </div> 
                                
        </div>
      
        </>
        
    ) 
   
}

export default Search
