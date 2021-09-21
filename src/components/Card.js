import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({generalItem}) => {
    const maxLength = 135
    return (
        <div>
              <div className='categories-card' key={generalItem.title}>
                            <p>{generalItem.name}</p>
                            <span>{generalItem.country}</span>
                            <h3>{generalItem.category}</h3>
                            <p>{generalItem.description.substr(0,maxLength)}</p>
                           <Link to={`/general/${generalItem.source?.id}`} style={{marginTop:'25px',marginLeft:'145px'}}>More...</Link>
                        </div>   
        </div>
    )
}

export default Card
