import React, { useState } from 'react'
import books from 'constants/books.json'
import { useRouter } from 'next/router'
import { Container } from './styles'

import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeftCircle
} from 'react-icons/ai'

const Details = () => {
  const router = useRouter()
  const { id } = router.query

  const [isFavorite, setIsfavorite] = useState(false)

  const book = books[0]

  return (
    <Container>
      <div className="goBack-button" onClick={() => router.back()}>
        <AiOutlineLeftCircle size={32} />
      </div>
      <div className="content">
        <div className="header">
          <img className="cover" src={book.thumbnailUrl} />
          <div>
            <div className="title-container">
              <h1 className="title">{book.title}</h1>
              <div
                className="favorite"
                onClick={() => setIsfavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <AiFillHeart size={24} />
                ) : (
                  <AiOutlineHeart size={24} />
                )}
              </div>
            </div>
            <span> {book.authors} </span>
            <p className="publishDate"> {book.publishedDate} </p>
          </div>
        </div>
        <div className="book-description">
          <p>{book.longDescription}</p>
        </div>
      </div>
    </Container>
  )
}

export default Details
