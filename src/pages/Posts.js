import React, { useState, useEffect } from "react";
import PostItem from "../components/PostItem";
import Create from "./Create";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://puns-app.herokuapp.com/puns");
      const data = await response.json();
      setPosts(data);
      // console.log(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPunHandler = async (newPun) => {
    try {
      const response = await fetch("https://puns-app.herokuapp.com/puns", {
        method: "POST", // GET/POST/PATCH/DELETE
        body: JSON.stringify(newPun),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data);
      setPosts([...posts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Create onAddPun={addPunHandler} />
      <div>
        {posts.reverse().map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
