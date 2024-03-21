const getId = (
  (id = 1) =>
  () =>
    id++
)();
// list of valid categories for books - https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp
  // valid categories for articles - https://developer.nytimes.com/docs/articlesearch-product/1/overview
  // movie - horror , action etc
export default getId;
