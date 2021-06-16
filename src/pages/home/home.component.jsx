import { React, Component } from 'react'

import './home.styles.scss'
import { HOME_CONTENT } from './temp/home.d'

import elixir from '../../assets/elixirs.jpg'
import ContentList from '../../components/content-list/content-list.component'

class Home extends Component {

    constructor(){
        super();

        this.state = {
            content: HOME_CONTENT  
        }
    }

    render(){
        return(
            <div className='home-page'>
                <div>
                    <img className='large-banner-image' alt='alchemy-elixir' src={elixir}/>
                </div>
                <ContentList
                content={this.state.content} 
                />
                
                <div className='video-box'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/We8zls8z8FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>    
        )   
    }
}

export default Home