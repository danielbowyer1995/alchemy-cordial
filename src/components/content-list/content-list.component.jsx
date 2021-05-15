import React from 'react'

import './content-list.styles.scss'

import ContentBox from '../../components/content-box/content-box.component'

const ContentList = ({content, color, font}) => (
    <div className='content-list'>
        {
            content.map((singleContent, i) => (
                <ContentBox 
                    key={i}
                    header={singleContent.header}
                    descriptions={singleContent.descriptions}
                    alt={singleContent.alt}
                    src={singleContent.src}
                    color={color}
                    font={font}
                />
            ))
        }
    </div>
)

export default ContentList