import React from "react"
import JSONData from "../../content/books.json"
const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.books.map((data, index) => {
        return <li key={`content_item_${index}`}>{JSON.stringify(data)}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime
