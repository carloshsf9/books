import React from 'react'
import { Container } from './styles'

const Book = ({ data }) => {
  return (
    <Container>
      <div className="book-overlay">
        <div className="book-header">
          <h2> {data.title} </h2>
        </div>
        <div className="book-content">
          <p>{data.shortDescription}</p>
        </div>
      </div>
      <img className="book-picture" src={data.thumbnailUrl} />
    </Container>
  )
}

export default Book
