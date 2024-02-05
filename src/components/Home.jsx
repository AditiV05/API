import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        if (error.response && error.response.status === 404) {
          console.log("404 Not Found: Display a specific message here");
        }
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <nav>
        <input
          className="entry"
          type="text"
          placeholder="Search books"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />

        <Link to="/register" className="reg-btn">
          Register
        </Link>
      </nav>

      <div className="container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <p className="writing">{book.title}</p>
            <p className="writing">{book.authors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
