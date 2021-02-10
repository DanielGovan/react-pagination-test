Front end developer test
A restful JSON API is provided at http://nyx.vima.ekt.gr:3000 that exposes the following schema:

Endpoint Method Post Params Default values Response
/api/books POST page
itemsPerPage
filters
1
20
Empty array []
{
books: [
book_author: [ “xxxxxx”],
book_publication_city: “xxxxxx”,
book_publication_country: “xxxxxx”,
book_publication_year: “xxxxxx”,
book_publication_city: “xxxxxx”,
book_pages: 23,
book_title: “xxxxxx”,
id: 1
],
count: 2000
}

Requirements:
1. Using React, build a webapp that queries this paginated endpoint and prints out the results as a list
2. The app should be paginated (page selector) with the pagination reflected in the url (so when the page is
refreshed the same resultset is shown)
3. You can use React Bootstrap as a components library for simplicity
4. Compile your own Bootstrap theme (less/sass) with the only difference to the original that the primary
colour is `#1D7874`
5. Host your code on github or similar, put all the code in a Pull Request against the (probably) empty repo

Optional
Add a search field to the app that upon request populates the `filters` post param as follows:
filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]