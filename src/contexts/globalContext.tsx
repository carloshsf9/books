import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

type Props = {
  children: React.ReactNode
}

type ContextType = {
  favorites?: [string | undefined][]
  setFavorites?: Dispatch<SetStateAction<[string | undefined][]>>
}

const GlobalContext = createContext<ContextType>({
  favorites: [],
  setFavorites: undefined
})

const GlobalProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<[string | undefined][]>([])

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        setFavorites
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
