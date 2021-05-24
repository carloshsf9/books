import React from 'react'
import { Container } from './styles'
import { BookProps } from './interface'

const Book = ({ data, onClick }: BookProps) => {
  return (
    <Container onClick={onClick}>
      <div className="book-overlay">
        <div className="book-header">
          <h2> {data.title} </h2>
        </div>
        <div className="book-content">
          <p> {data.description} </p>
        </div>
        <div className="book-bottom">
          <span> {data.publishedDate} </span>
        </div>
      </div>
      <img className="book-picture" src={data.picture} />
    </Container>
  )
}

export default Book
