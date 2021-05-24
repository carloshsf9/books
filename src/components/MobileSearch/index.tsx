import React, { useState } from 'react'
import { Container } from './styles'
import Input from 'components/Input'
import { MobileSearchProps } from './interface'
import { useGlobalContext } from 'contexts/globalContext'

import { getBooksByKeywords } from 'utils/getBooksByKeywords'
import { formatBookResponse } from 'utils/formatBookResponse'

import { useRouter } from 'next/router'

const MobileSearch = ({ page }: MobileSearchProps) => {
  const router = useRouter()
  const { books, setBooks } = useGlobalContext()
  const [search, setSearch] = useState<string>('')

  const handleBooksSearch = async (keywords: string) => {
    setSearch(keywords)
    setBooks && setBooks([])
    if (keywords.length > 0) {
      const { books } = await getBooksByKeywords(keywords, page)
      const formatedBooks = books?.map((book: any) => {
        return formatBookResponse(book)
      })

      setBooks && setBooks(formatedBooks)
    }
  }
  return (
    <Container>
      <div className="input-container">
        <Input
          value={search}
          placeholder="Pesquise por títulos, palavras chaves e autores"
          onChange={e => handleBooksSearch(e.target.value)}
        />
      </div>
      <div className="results-container">
        <ul>
          {search.length > 0 &&
            books?.slice(0, 4).map((book, index) => (
              <li
                className="result"
                onClick={() => router.push(`/${book.id}`)}
                key={index}
              >
                {book.title}
              </li>
            ))}
        </ul>
      </div>
    </Container>
  )
}

export default MobileSearch
