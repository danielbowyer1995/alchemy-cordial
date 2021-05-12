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
                <div className='video-box'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/We8zls8z8FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='gold-background-box'>
                <ContentBox 
                    header='about us'
                    descriptions={[
                        'Everyone here at Alchemy shares an obsession with flavour, and loves nothing more than making our customers swoon with pleasure at the taste of our cordials and syrups.',
                        'We are all fully engaged in our mission which is ‘Transforming Refreshment',
                        'Making products that change how you feel, and also changing the way refreshment is made, delivered and enjoyed!',
                        'We are a family business, that started as a market stall selling home made cordials back in 1997, and have organically grown to become a successful and well regarded manufacturer and marketer of naturally flavoured beverages.',
                        'We focus on both the retail and food service markets here in Australia, and have developed several different ranges of products for use in cafes, restaurants, bars, delicatessens and supermarkets.',
                        'All of our products are hand made with love and pride, and we all believe that…..“Life is Magic – Drink it in”',
                    ]}
                />
                </div>
                <ContentBox
                        header='contact us today' 
                        descriptions={['Do you want to get your hands on our products?', 'Give Darril Ling a call on +44 7566 738444']}
                />
                <img style={{padding: "16px"}} alt='darril' src={darril}/>
            </div>
        )   
    }
}

export default Home