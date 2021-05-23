import React, { useState } from 'react'
import { Container } from './styles'
import Input from 'components/Input'

import books from 'constants/books.json'
import { useRouter } from 'next/router'

const MobileSearch = () => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  return (
    <Container>
      <div className="input-container">
        <Input
          value={search}
          placeholder="Pesquise por títulos, palavras chaves e autores"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="results-container">
        <ul>
          {search.length > 0 &&
            books.slice(0, 5).map((book, index) => (
              <li onClick={() => router.push(`/${book.isbn}`)} key={index}>
                {book.title}
              </li>
            ))}
        </ul>
      </div>
    </Container>
  )
}

export default MobileSearch
