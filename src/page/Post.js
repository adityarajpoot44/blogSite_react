import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import Container from "../components/container/Container";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 glass w-[90%] m-auto mt-10">
      <Container>
        <div className="w-full flex justify-center mb-4 relative rounded-xl p-4">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 bottom-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="hover:bg-green-700 mr-3 mt-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500 " className="hover:bg-red-700 mr-3 mb-3" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="w-full  text-white mb-6">
            <h1 className="text-4xl text-center text-blue-600 font-bold">{post.title}</h1>
          </div>
          <div className="browser-css text-white">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}
