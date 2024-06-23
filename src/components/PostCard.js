import React from 'react'
import Service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='glass p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={Service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full h-[20vh]' />
                
                </div>
            <h2 className='text-xl text-white font-bold'>{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard