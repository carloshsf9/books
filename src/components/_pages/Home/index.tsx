import React from 'react'
import { useRouter } from 'next/router'
import { Container } from './styles'

import Sidebar from 'components/Sidebar'
import MobileSearch from 'components/MobileSearch'
import books from 'constants/books.json'
import Book from 'components/Book'

const HomePage = () => {
  const router = useRouter()

  return (
    <Container>
      <MobileSearch />
      <Sidebar books={books} />
      <div className="books-container">
        {books.map((book, index) => (
          <Book
            key={index}
            data={book}
            onClick={() => router.push(`/${book.isbn}`)}
          />
        ))}
      </div>
    </Container>
  )
}

export default HomePage
