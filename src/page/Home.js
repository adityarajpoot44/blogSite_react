import React, {useEffect, useState} from 'react'
import service from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <div className="flex mt-10 h-[45vh] flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white hover:text-gray-500">
                                NO post yet
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                    
                </div>
            </Container>
        </div>
    )
}

export default Home