import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from './styles'
import { useGlobalContext } from 'contexts/globalContext'

import Sidebar from 'components/Sidebar'
import MobileSearch from 'components/MobileSearch'
import Book from 'components/Book'

const HomePage = () => {
  const router = useRouter()
  const { showFavorites, favorites, books, setBooks } = useGlobalContext()
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    if (search.length === 0) {
      setBooks && setBooks([])
      setPage(0)
    }
  }, [search])

  return (
    <Container>
      <MobileSearch search={search} setSearch={setSearch} page={page} />
      <Sidebar
        search={search}
        setSearch={setSearch}
        page={page}
        setPage={setPage}
      />
      {books?.length === 0 && !showFavorites && page === 0 && (
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
        {!showFavorites && books !== undefined && books?.length > 0 && (
          <div className="pagination-container">
            <div className="pagination">
              {page > 0 && (
                <>
                  <span
                    onClick={() => setPage(page - 1)}
                    className="pagination-button"
                  >
                    Anterior
                  </span>
                  <span> | </span>
                </>
              )}
              <span
                onClick={() => setPage(page + 1)}
                className="pagination-button"
              >
                Próxima
              </span>
            </div>
            <div className="page">
              <span>Página atual: {page + 1}</span>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default HomePage
