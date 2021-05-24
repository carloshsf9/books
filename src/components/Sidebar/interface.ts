import { SetStateAction } from 'react'
import { Dispatch } from 'react'

export type SidebarProps = {
  page: number
  setPage?: Dispatch<SetStateAction<number>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
