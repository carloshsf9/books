import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export type MobileSearchProps = {
  page: number
  setPage?: Dispatch<SetStateAction<number>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
