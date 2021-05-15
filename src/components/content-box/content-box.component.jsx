import React from 'react'

import './content-box.styles.scss'

const ContentBox = ({ header, descriptions, alt, src, color, font }) => (
    <div className='content-box' style={{backgroundColor: color, color: font}}>
        <h1 className='content-item' >{header.toUpperCase()}</h1>
        {descriptions.map((description, i) => (
            <span key={i} className='content-item'>{description}</span>
        ))}
        {
            src !== '' 
            ?
            <div className='image-wrapper'>
                <img className='content-image' alt={alt} src={src}></img>
            </div>
            :
            null
        }
        
        
    </div>
)

export default ContentBox