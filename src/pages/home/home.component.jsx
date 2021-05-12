import { React, Component } from 'react'

import './home.styles.scss'

import ContentBox from '../../components/content-box/content-box.component'
import Header from '../../components/header/header.coponent'

import darril from '../../assets/Darril_Ling_Photo.png'
import elixir from '../../assets/elixirs.jpg'

class Home extends Component {
    render(){
        return(
            <div className='home-page'>
                <Header />
                <img className='large-banner-image' alt='alchemy-elixir' src={elixir}/>
                <ContentBox 
                    header='Welcome to Alchemy Chordial'
                    descriptions={[
                        'If you are as obsessed with flavour as we are then you have come to the right place.',
                        'The team at Alchemy works hard to bring you new and innovative flavours that will blow your mind, and your taste buds!',
                        'Our wonderful and delicious products are dairy and gluten free and all our ingredients are supplied by Mother Nature.',
                    ]}
                />
                <div className='gold-background-box'>
                    <ContentBox
                        header='Get in touch' 
                        descriptions={['Do you want to get your hands on our product?', 'Give Darril Ling a call on +44 7566 738444']}
                    />
                    <img alt='darril' src={darril}/>
                </div>
            </div>
        )   
    }
}

export default Home