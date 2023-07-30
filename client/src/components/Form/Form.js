import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [page, setPage] = useState();
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e, name, page, genre, author, image) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v1/books/", {
      name: name,
      pages: page,
      genre: genre,
      author: author,
      image: image,
    });

    navigate("/");
  };

  return (
    <div className="FormContainer">
      <form method="POST" className="FormContainer-outer">
        <input
          className="FormInput"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter book name"
        />

        <input
          className="FormInput"
          value={page}
          type="number"
          onChange={(e) => setPage(e.target.value)}
          placeholder="Enter book page"
        />

        <input
          className="FormInput"
          value={genre}
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Enter genre "
        />

        <input
          className="FormInput"
          value={author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />

        <input
          className="FormInput"
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Give a Image"
        />

        <button
          className="FormInput-Button"
          onClick={(e) => handleSubmit(e, name, page, genre, author, image)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
