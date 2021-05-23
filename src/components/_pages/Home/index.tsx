import React from 'react'
import { Container } from './styles'
import Sidebar from 'components/Sidebar'
import books from 'constants/books.json'
import Book from 'components/Book'

const HomePage = () => {
  return (
    <Container>
      <Sidebar />
      <div className="books-container">
        {books.map((book, index) => (
          <Book key={index} data={book} />
        ))}
      </div>
    </Container>
  )
}

export default HomePage
