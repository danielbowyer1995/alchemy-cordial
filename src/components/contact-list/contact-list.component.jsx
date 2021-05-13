import React from 'react'

import './contact-list.styles.scss'
import elite from '../../assets/contacts-logos/elite-fine-foods.jpg'

import ContactCard from '../../components/contact-card/contact-card.component'

const ContactList = ({ contacts }) => (
    <div className='contact-list'>
        {
            contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    alt={contact.alt}
                    src={contact.src}
                    name={contact.name}
                    number={contact.number}
                    email={contact.email}
                    address={contact.address}
                />
            ))
        }
    </div>
)

export default ContactList