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
  favorites?: string[]
  setFavorites?: Dispatch<SetStateAction<string[]>>
  showFavorites?: boolean
  setShowFavorites?: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextType>({
  favorites: [],
  setFavorites: undefined,
  showFavorites: false,
  setShowFavorites: undefined
})

const GlobalProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([])
  const [showFavorites, setShowFavorites] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites
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
