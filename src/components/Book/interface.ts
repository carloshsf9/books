interface Book {
  title: string
  longDescription?: string
  publishedDate: string
  thumbnailUrl: string
}

export type BookProps = {
  data: Book
  onClick?: () => void
}
