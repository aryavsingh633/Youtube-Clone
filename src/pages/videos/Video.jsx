import React, { useState } from 'react'
import './Video.css'
import PlayVideo from '../../components/playvideo/PlayVideo'
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router'

const Video = () => {
    const { videoId } = useParams();
    const [categoryId, setCategoryId] = useState(null);

    return (
        <div className='play-container'>
            <PlayVideo videoId={videoId} setCategoryId={setCategoryId} />

            {categoryId && <Recommended categoryId={categoryId} />}
        </div>
    )
}

export default Video;