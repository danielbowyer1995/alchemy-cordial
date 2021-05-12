import React from 'react'

import './content-box.styles.scss'

const ContentBox = (props) => (
    <div className='content-box'>
        <h1 className='content-item' >{props.header.toUpperCase()}</h1>
        {props.descriptions.map((description, i) => (
            <span key={i} className='content-item' >{description}</span>
        ))}
        
        <img alt={props.alt} src={props.src}></img>
    </div>
)

export default ContentBox