LEFT TODO:
- Get the page number persisting in query strings or routing
- Add a search facility and put it in the params
- neaten everything up, make a pull request. To my own repo lol. Note using node 14

use https://reactrouter.com/web/example/url-params to change the request

https://medium.com/better-programming/using-url-parameters-and-query-strings-with-react-router-fffdcea7a8e9
host on github but make a pull request instead of just pushing
add a form with onchanges etc, and on submit filter the call
abstract a lot of functions?

1. The app should be paginated (page selector) with the pagination reflected in the url (so when the page is refreshed the same resultset is shown)
2. Host your code on github or similar, put all the code in a Pull Request against the (probably) empty repo
3. Add a search field to the app that upon request populates the `filters` post param as follows:
filters: [{ type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"] }];