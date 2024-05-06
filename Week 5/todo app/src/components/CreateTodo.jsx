import React from "react";
import { useState } from "react";
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
          border: "1px solid white",
        }}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        placeholder="description"
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
          border: "1px solid white",
        }}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
