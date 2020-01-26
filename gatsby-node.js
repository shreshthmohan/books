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
  const template = path.resolve("./src/templates/people.js")
  data.people.forEach(person => {
    var path = person.name
      .split(" ")
      .join("-")
      .toLowerCase()
    createPage({
      path: `/${path}`,
      component: template,
      context: { person },
    })
  })
}
