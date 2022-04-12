import React, { useState, useEffect, useRef } from "react";

function Create(props) {
  const contentRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newPun = {
    //   content: contentRef.current.value,
    // };
    props.onAddPun({
      content: contentRef.current.value,
    });
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "50px" }}>
      <form onSubmit={handleSubmit}>
        <label>Add new pun: </label>
        <input type="text" ref={contentRef} id="content" />
        <button>Create</button>
      </form>
    </div>
  );
}

export default Create;
