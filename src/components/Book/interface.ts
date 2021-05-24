type Book = {
  title: string
  description: string
  picture?: string
  publishedDate: string
  id: string
  authors: string[]
}

export type BookProps = {
  data: Book
  onClick?: () => void
}
