import React from 'react'
import '../App.css'
import { getTopUSNews } from '../service'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import More from '../img/more.png'


const NewsFromUS = () => {
    const [sources,setSources] = useState([])

    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'


    useEffect(() => {
        getTopUSNews().then(res => {
            //console.log(res.data.articles[0])
             setSources(res.data.articles.slice(0,10))
         })
    },[])
    return (
        <>
        <h1>Top News from United States</h1>
        <div className='homepage-section'>
            {
               sources.map(({source,title,description,urlToImage,publishedAt}) => 
            <div className='card' key={publishedAt}>
                <h3>{title}</h3>
                <img src={urlToImage ? urlToImage : placeholder} alt='alt' />              
                <p>{description}</p>
                <Link to={`/newsfromus/${source?.id}`}>More<img className='moreIcon' src={More} alt='more' /></Link>
            </div>
               ) 
            }
        </div>
        </>
    )
}

export default NewsFromUS
