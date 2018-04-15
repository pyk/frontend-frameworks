# Requirements

## Page: Index

Meta:
* Page name: Index
* Page route: `/`
* Page description: This is a Homepage

### Expected content & behaviours

* When user access `/` in the browser, the user should be able
  to view the `indexpage`.
* `homepage` contains `header`, `main`, `aside` and `footer`.
    * `header` contains the following menus: `home`, `reviews`,
      and `login`.
        * If menu `home` is clicked by user, then do nothing.
        * If menu `reviews` is clicked by user, then go to `reviewspage`.
        * If menu `login` is clicked by user, then perform login
          with github.
    * `main` contains the content of the page.
    * `aside` is a sidebar. `aside` contains a list of link.
    * `footer` is a footer.
