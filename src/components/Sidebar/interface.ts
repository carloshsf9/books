interface Book {
  title: string
  isbn: string
  longDescription?: string
  publishedDate: string
  thumbnailUrl: string
}

export type SidebarProps = {
  books: Book[]
}
