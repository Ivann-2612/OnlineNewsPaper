import React from 'react'
import '../components/HomePage.css'
import More from '../img/more.png'
import { getTopUSNews } from '../service'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    const [sources,setSources] = useState([])
    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    
   
    useEffect(() => {
        getTopUSNews().then(res => {
             //console.log(res.data.articles)
             setSources(res.data.articles.slice(0,30))
         })
    },[])
    
    return (
        <>
         <h2>Top News from around the world</h2>
        <div className='homepage-section'>
                     
            {
               sources?.map(({title,description,urlToImage,url,source}) => { 
                   return (
                    <div className='homepage-card' key={url}>
                    <h3>{title}...</h3>
                    <img src={urlToImage ? urlToImage : placeholder} alt={title} />
                    <p>{description ? description : title}</p>
                    <Link to={`homepage/${source?.id}`}>More<img className='moreIcon' src={More} alt='more' /></Link>
                    </div>
                   )}) 
            }
        </div> 
        </>    
    )
    }
export default HomePage
