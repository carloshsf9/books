import React, { useState } from 'react'
import books from 'constants/books.json'
import { useRouter } from 'next/router'
import { Container } from './styles'
import { useGlobalContext } from 'contexts/globalContext'

import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeftCircle
} from 'react-icons/ai'

const Details = () => {
  const router = useRouter()
  const { id } = router.query
  const bookId = id?.toString()
  const { favorites, setFavorites } = useGlobalContext()

  const checkIfIsFavorite = () => {
    const book = favorites?.filter(book => book === id)
    if (book?.length === 1) return true
    return false
  }

  const [isFavorite, setIsfavorite] = useState<boolean>(checkIfIsFavorite())

  const toggleFavorite = () => {
    if (isFavorite && favorites && setFavorites) {
      setIsfavorite(false)
      setFavorites(favorites.filter(bookId => id !== bookId))
      return
    }
    if (favorites && id && setFavorites && bookId) {
      setIsfavorite(true)
      const concatArray = favorites.concat([bookId])
      setFavorites(concatArray)
      return
    }
  }

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
              <div className="favorite" onClick={() => toggleFavorite()}>
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
