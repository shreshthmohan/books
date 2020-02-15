/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const data = require("./content/books.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const bookListTemplate = path.resolve("./src/templates/bookList.js")
  createPage({
    path: "/book-list",
    component: bookListTemplate,
    context: { books: data.books },
  })
  const bookPageTemplate = path.resolve("./src/templates/book.js")
  Object.keys(data.books).forEach(bookKey => {
    var book = data.books[bookKey]
    var path = `/book/${book.title
      .split(" ")
      .join("-")
      .toLowerCase()}`
    createPage({
      path,
      component: bookPageTemplate,
      context: { book },
    })
  })
}
