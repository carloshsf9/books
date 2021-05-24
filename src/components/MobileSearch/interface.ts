import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export type MobileSearchProps = {
  page: number
  setPage?: () => void
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
