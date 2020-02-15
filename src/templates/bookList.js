import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { books } }) => {
  return (
    <div>
      {Object.keys(books).map(bookKey => {
        const book = books[bookKey]
        const pathToBook = `/book/${book.title
          .split(" ")
          .join("-")
          .toLowerCase()}`
        return (
          <div key={book.title}>
            <h2>
              <Link to={pathToBook}>{book.title}</Link>
            </h2>
            <p>{book.authors.map(author => author)}</p>
            <p>Recommended by: {book.recommenders.join(", ")}</p>
          </div>
        )
      })}
    </div>
  )
}
