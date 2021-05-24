export const formatBookResponse = (data: any) => {
  const formatedBooks = {
    title: data.volumeInfo.title,
    authors: data.volumeInfo.authors,
    publishedDate: data.volumeInfo.publishedDate,
    description: data.volumeInfo.description,
    picture: data.volumeInfo.imageLinks?.thumbnail,
    id: data.id
  }
  return formatedBooks
}