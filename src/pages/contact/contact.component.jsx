import React, { Component } from 'react'
import ContactList from '../../components/contact-list/contact-list.component';

import ContentList from '../../components/content-list/content-list.component'

import './contact.styles.scss'
import { CONTACT_CONTENT, CONTACT_DATA } from './temp/contact.d'

class Contact extends Component {

    constructor(){
        super();

        this.state = {
            content: CONTACT_CONTENT,
            contacts: CONTACT_DATA,
        }
    }

    render(){
        return(
            <div className='contact-page'>
                <div>
                    <ContentList
                    color={'white'}
                    font={'#af0522'}
                    content={this.state.content}
                    />
                    <div>
                        <ContactList 
                        color={'white'}
                            contacts={this.state.contacts}
                        />
                    </div>
                </div>
                
                {/* <ContactList
                    contacts={this.state.contacts}
                /> */}
            </div>
        )
    }

} 
    


export default Contact