import axios from 'axios'

export const getBookById = async (id: string | undefined) => {
  const API_KEY = process.env.NEXT_PUBLIC_BOOKS_API_KEY
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
  )
  const books = response?.data

  return books
}
