import React from 'react'
import News from '../img/news.jpg'

const Welcome = () => {
    const StyleDiv = {
        display:'flex',
        justifyContent:'center',
        alignContent: 'center',
        background:'linear-gradient(#16171C,#212121)',
        width:'100%',
        height:'100vh',
        color:'rgb(169 180 196)',
        borderTop:'0.5px solid #F3F1D0'
    }
    const StyleImg = {
        maxWidth:'600px',
        position:'absolute',
        top: '28%',
        borderRadius:'3px',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 3px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    }
    const StyleH1 = {
        margin:'36px'
    }
    
    return (
        <div style={StyleDiv}>
            <h1 style={StyleH1}>News you can trust is news you can use</h1>
            <img src={News} alt='news' style={StyleImg} />
        </div>
    )
}

export default Welcome