import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from './styles'
import { useGlobalContext } from 'contexts/globalContext'
import { getBookById } from 'utils/getBookById'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeftCircle
} from 'react-icons/ai'
import { formatBookResponse } from 'utils/formatBookResponse'

type Book = {
  title: string
  description: string
  picture?: string
  publishedDate: string
  id: string
  authors: string[]
}

const Details = () => {
  const router = useRouter()
  const { id } = router.query
  const bookId = id?.toString()
  const { favorites, setFavorites } = useGlobalContext()

  const [book, setBook] = useState<Book>({
    title: '',
    description: '',
    publishedDate: '',
    id: '',
    authors: []
  })

  const getBook = async () => {
    const response = await getBookById(bookId)
    const formatedBook = formatBookResponse(response)
    setBook(formatedBook)
  }

  useEffect(() => {
    getBook()
  }, [])

  const checkIfIsFavorite = () => {
    const book = favorites?.filter(book => bookId === book.id)
    if (book?.length === 1) return true
    return false
  }

  const [isFavorite, setIsfavorite] = useState<boolean>(checkIfIsFavorite())

  const toggleFavorite = () => {
    if (isFavorite && favorites && setFavorites) {
      setIsfavorite(false)
      setFavorites(favorites.filter(book => bookId !== book.id))
      return
    }
    if (favorites && id && setFavorites && bookId) {
      setIsfavorite(true)
      const concatArray = favorites.concat([book])
      setFavorites(concatArray)
      return
    }
  }

  return (
    <Container>
      <div className="goBack-button" onClick={() => router.back()}>
        <AiOutlineLeftCircle size={32} />
      </div>
      <div className="content">
        <div className="header">
          <img className="cover" src={book.picture} />
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
            <div className="authors-container">
              <p className="authors">
                {book.authors?.map((name, index) => (
                  <span key={index}>
                    {index > 0 && ' ,'} &nbsp;{name}
                  </span>
                ))}
              </p>
            </div>
            <p className="publishDate"> {book.publishedDate} </p>
          </div>
        </div>
        <div className="book-description">
          <p>{book.description || 'Descrição indisponível'}</p>
        </div>
      </div>
    </Container>
  )
}

export default Details
