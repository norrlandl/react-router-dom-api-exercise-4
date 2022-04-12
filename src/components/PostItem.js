import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <article>
      <Link to={`/posts/${post._id}`}>
        <h3>{post.content}</h3>
      </Link>
    </article>
  );
}

export default PostItem;
