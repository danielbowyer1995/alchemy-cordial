import React from 'react'

import './contact-list.styles.scss'

import ContactCard from '../../components/contact-card/contact-card.component'

const ContactList = ({ contacts, color }) => (
    <div className='contact-list' style={{backgroundColor: color}}>
        {
            contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    alt={contact.alt}
                    src={contact.src}
                    name={contact.name}
                    number={contact.number}
                    email={contact.email.toLowerCase()}
                    address={contact.address.toLowerCase()}
                />
            ))
        }
    </div>
)

export default ContactList