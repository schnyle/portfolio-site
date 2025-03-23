export const getBooks = () => {
  const context = require.context("../assets/books", false, /\.(png|jpg)$/);
  const bookPaths = context.keys().map(context);
  return bookPaths;
};