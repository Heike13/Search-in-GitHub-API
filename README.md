# Take a search in GitHub

![resultat](docs/result.png)

## Objective

Create a directory that allows searching for repositories on GitHub. I have limited the number of results to the top 20 highest-rated (yellow stars) for performance reasons.

>Project developed using REACT in TypeScript, with the use of the component library
>"Semantic UI React". The components are provided without JS code.

***
GitHub provides an API that allows searching through all repositories at this address:

<https://api.github.com/search/repositories?q=REPOTOSEARCH>

By replacing `REPOTOSEARCH` with the user's input, you will get a list of results matching the desired theme.
***

### Project Installation

Install all necessary dependencies

```bash
pnpm install
```

Then run the script to start the "vite" server

```bash
pnpm run dev
```

## TODO project

- Refacto : Result.tsx to pu Card into a component (clean architecture)
- Add a button to load more results into a new page
- Add selectors to filter the results (language, updated_at )
- Add a modal to take a look for card-result, before going on targeted website
