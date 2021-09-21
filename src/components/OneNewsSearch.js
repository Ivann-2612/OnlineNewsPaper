import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { getTopUSNews } from '../service'
import { useState, useEffect } from 'react'
import './OneNews.css'


const OneNewsSearch = () => {
    const [sources,setSources] = useState([])
    const  {id}  = useParams()
    let history = useHistory()

    const titlePlaceholder = 'Nobel Prize-Winning Physicist Steven Weinberg Dies At 88 - Fox News...'
    const imgPlaceholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const contentPlaceholder = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
    
    function handleClick() {
        history.push('/search')
    }
    useEffect(() => {
        getTopUSNews().then(res => {
             //console.log(res.data.articles)
             setSources(res.data.articles)
         })
    },[])
    let oneNewsArray = sources?.filter(el => el.source.id === id)
    let oneNews = oneNewsArray[0]
console.log(oneNews);
    const maxLength = 260

    //console.log(oneNews);
        return (
        <div className='oneNews-div'>
          <h2>{oneNews?.title ? oneNews?.title : titlePlaceholder}</h2>
          <img src={oneNews?.urlToImage ? oneNews?.urlToImage : imgPlaceholder} alt='alt' />
          <p>{oneNews?.content ? oneNews?.content.substr(0,maxLength) : contentPlaceholder}....</p>
          <button type='button' onClick={handleClick}>Back to list</button>     
        </div>
    )
}

export default OneNewsSearch
