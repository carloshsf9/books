import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { useLocalState } from 'hooks/useLocalState'

type Props = {
  children: React.ReactNode
}

type Book = {
  title: string
  description: string
  picture?: string
  publishedDate: string
  id: string
  authors: string[]
}

type ContextType = {
  favorites?: Book[]
  setFavorites?: Dispatch<SetStateAction<Book[]>>
  showFavorites?: boolean
  setShowFavorites?: Dispatch<SetStateAction<boolean>>
  books?: Book[]
  setBooks?: Dispatch<SetStateAction<Book[]>>
}

const GlobalContext = createContext<ContextType>({
  favorites: [],
  setFavorites: undefined,
  showFavorites: false,
  setShowFavorites: undefined,
  books: [],
  setBooks: undefined
})

const GlobalProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useLocalState([], 'books')
  const [books, setBooks] = useState<Book[]>([])
  const [showFavorites, setShowFavorites] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites,
        books,
        setBooks
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider, useGlobalContext }
