import React from 'react'

import './content-box.styles.scss'

const ContentBox = ({ header, descriptions, alt, src }) => (
    <div className='content-box'>
        <h1 className='content-item' >{header.toUpperCase()}</h1>
        {descriptions.map((description, i) => (
            <span key={i} className='content-item' >{description}</span>
        ))}
        <div className='image-wrapper'>
            <img className='content-image' alt={alt} src={src}></img>
        </div>
        
    </div>
)

export default ContentBox