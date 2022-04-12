import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Update from "./Update";

function SingelPost(props) {
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  let params = useParams();
  console.log(params);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        "https://puns-app.herokuapp.com/puns/" + params.id
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // Delete Pun
  const deletePun = async () => {
    try {
      const response = await fetch(
        "https://puns-app.herokuapp.com/puns/" + params.id,
        {
          method: "DELETE", // GET/POST/PATCH/DELETE
        }
      );
      const data = await response.json();
      console.log(data);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Pun
  const updatePun = async (newPun) => {
    try {
      const response = await fetch(
        "https://puns-app.herokuapp.com/puns/" + params.id,
        {
          method: "PATCH", // GET/POST/PATCH/DELETE
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPun),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Singel post</h1>
      <h4>{post.content}</h4>
      <Link to="/posts">Tillbaka</Link> |{" "}
      <Link to="/posts" onClick={deletePun}>
        Ta bort pun
      </Link>
      <Update onUpdate={updatePun} post={post} />
    </div>
  );
}

export default SingelPost;
