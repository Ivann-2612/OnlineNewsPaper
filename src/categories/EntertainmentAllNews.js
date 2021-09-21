import React from 'react'
import '../../src/components/Categories.css'
import { useState, useEffect } from 'react'
import { getAllSources } from '../service'
import Card from '../components/Card'


const EntertainmentAllNews = () => {
    const [sources,setSources] = useState([])
    
    useEffect(() => { 
        let mounted = true   
        getAllSources().then(res => {
            if (mounted)
            //console.log(res.data.sources)
             setSources(res.data.sources)
         })
         return () => mounted = false
    },[])
    
     let entertainment = sources?.filter(el=> el.category === 'entertainment').slice(0,10)
    return (
        <>
        {
            entertainment.map((generalItem,id) => 
            <Card generalItem={generalItem} key={id} />  
        )
        }
   </>
    )
}

export default EntertainmentAllNews
