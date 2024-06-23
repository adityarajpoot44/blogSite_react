import React, { useEffect, useState } from "react";

import service from "../appwrite/config";
import Container from "../components/Container/Container";
import PostCard from "../components/PostCard";

export default function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
