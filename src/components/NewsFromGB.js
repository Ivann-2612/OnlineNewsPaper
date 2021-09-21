import React from 'react'
import '../App.css'
import { getTopGBNews } from '../service'
import { useState, useEffect } from 'react'
import More from '../img/more.png'
import { Link } from 'react-router-dom';


const NewsFromGB = () => {

    const [sources,setSources] = useState([])

    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    
    
    useEffect(() => {
        getTopGBNews().then(res => {
            //console.log(res.data.articles)
             setSources(res.data.articles.slice(0,10))
         })
    },[])
    return (
        <> 
        <h1>Top News from Great Britain</h1>
        <div className='homepage-section'>
                     
            {
               sources.map(({title,description,urlToImage,url,source}) => { 
                   return (
                    <div className='card' key={url}>
                    <h3>{title}...</h3>
                    <img src={urlToImage ? urlToImage : placeholder} alt={title} />
                    <p>{description}</p>
                    <Link to={`newsfromgb/${source?.id}`}>More<img className='moreIcon' src={More} alt='more' /></Link>
                </div>
                   )}) 
            }
        </div>
        </>
    )
}

export default NewsFromGB
