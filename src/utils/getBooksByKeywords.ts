import axios from 'axios'

export const getBooksByKeywords = async (keyword: string, page: number) => {
  const API_KEY = process.env.NEXT_PUBLIC_BOOKS_API_KEY
  const startIndex = page * 20
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${API_KEY}&startIndex=${startIndex}&maxResults=20`
  )

  const books = response?.data?.items
  const totalItems = response?.data?.totalItems

  return { books, totalItems }
}
