import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Update(props) {
  const contentRef = useRef("");

  const updatePun = (e) => {
    e.preventDefault();
    const newPun = {
      content: contentRef.current.value,
    };
    props.onUpdate(newPun);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Uppdatera</h1>
      <form onSubmit={updatePun}>
        <input
          onChange={changeHandler}
          type="text"
          ref={contentRef}
          defaultValue={props.post.content}
        />
        <button type="submit">Uppdatera</button>
      </form>
    </div>
  );
}

export default Update;
