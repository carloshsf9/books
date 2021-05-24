import axios from 'axios'

export const getBooksByKeywords = async (keyword: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_BOOKS_API_KEY
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${API_KEY}`
  )
  const books = response?.data?.items

  return books

}
