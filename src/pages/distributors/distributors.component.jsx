import React, { Component } from 'react'

import { DISTRIBUTOR_DATA } from './temp/DISTRIBUTOR_DATA'

import ContactList from '../../components/contact-list/contact-list.component'

class Distributors extends Component {

    constructor(){
        super();

        this.state = DISTRIBUTOR_DATA
    }

    render(){
        return(
            <div>
                <ContactList contacts={this.state}/>
            </div>
        )
    }
}

export default Distributors