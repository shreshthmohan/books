import React from "react"
import { graphql } from "gatsby"

export default ({ pageContext: { person } }) => {
  return (
    <div>
      <p>{JSON.stringify(person)}</p>
      <p>{person.name}</p>
      <img src={person.photo} />
      {person.photo}
    </div>
  )
}
