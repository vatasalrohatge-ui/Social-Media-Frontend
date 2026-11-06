import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "./feed.css";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://social-media-ded5.onrender.com/api/file/get-posts",
      );
      setPosts(response.data.posts);
      console.log(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="feed">
        {posts.map((post) => {
          let finalUrl = `${post.url}`;
            if (finalUrl && finalUrl.includes("ik.imagekit.io/bluevoid")) {
            finalUrl = finalUrl.replace("ik.imagekit.io/bluevoid", "ik.imagekit.io/bluevoid/tr:w-600,h-600");
          }

          return (
            <div key={post._id} id="post">
              <img
                src={finalUrl}
                alt={post.caption || "Post Image"}
                width="275"
                height="250"
                id="post-img"
              />
              <h2>{post.caption}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
