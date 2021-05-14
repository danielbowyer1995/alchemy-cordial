import React from 'react'

import ContentBox from '../../components/content-box/content-box.component'

const ContentList = ({content}) => (
    <div>
        {
            content.map((singleContent, i) => (
                <ContentBox 
                    key={i}
                    header={singleContent.header}
                    descriptions={singleContent.descriptions}
                    alt={singleContent.alt}
                    src={singleContent.src}
                />
            ))
        }
    </div>
)

export default ContentList