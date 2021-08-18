This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use the following commands to start the app:

```bash

npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Favorites/Comments persistence is done in FavoritesContext/CommentsContext via localStorage.

All Pokemon and individual Pokemon data is pre-fetched in an async function below the page components.

Next.js handles caching pre-fetched data if possible, mostly depends on the type of pre-rendering. See [Next.js Documentation](https://nextjs.org/docs/basic-features/data-fetching) for more info.

Wanted to add pagination api calls caching using localStorage, but according to the Chrome devTools, those requests get chached automatically as well.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
