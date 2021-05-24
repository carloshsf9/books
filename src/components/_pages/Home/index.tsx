import React from 'react'
import { useRouter } from 'next/router'
import { Container } from './styles'
import { useGlobalContext } from 'contexts/globalContext'

import Sidebar from 'components/Sidebar'
import MobileSearch from 'components/MobileSearch'
import Book from 'components/Book'

const HomePage = () => {
  const router = useRouter()
  const { showFavorites, favorites, books } = useGlobalContext()

  return (
    <Container>
      <MobileSearch />
      <Sidebar />
      {books?.length === 0 && !showFavorites && (
        <div className="not-found">
          <h1>Pesquise por titulos palavras chaves e autores..</h1>
        </div>
      )}
      {favorites?.length === 0 && showFavorites && (
        <div className="not-found">
          <h1>Você ainda não tem livros salvos como favoritos</h1>
        </div>
      )}
      <div className="books-container">
        {showFavorites
          ? favorites?.map((book: any, index: number) => (
              <Book
                key={index}
                data={book}
                onClick={() => router.push(`/${book.id}`)}
              />
            ))
          : books?.map((book: any, index: number) => (
              <Book
                key={index}
                data={book}
                onClick={() => router.push(`/${book.id}`)}
              />
            ))}
      </div>
    </Container>
  )
}

export default HomePage
