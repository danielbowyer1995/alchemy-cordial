import React from 'react'

import './contact-card.styles.scss'

const ContactCard = ({alt, src, name, number, email, address}) => (
    <div className='contact-card'>
        <div className='contact-image'>
            <img style={{width: '150px'}}alt={alt} src={src}/>
        </div>
        <div className='contact-details'>
            <span className='single-detail'>{name}</span>
            <span className='single-detail'>{number}</span>
            <span className='single-detail'>{email}</span>
            <spam className='single-detail'>{address}</spam>
        </div>
    </div>
)

export default ContactCard