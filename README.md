# Class 37/38/39/41

## Lab Name: Cookie Stand Admin

## Author: Jason Christopher

### Description

* This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
* This is the admin page of the Cookie Stands project with a Next.js front-end connected to a Django back-end server acting as an API connected to a PostgreSQL database.
* Locations can be created or deleted from the main admin dashboard once a user logs in.

### Setup

* Clone the `cookie-stand-api` repo from my GitHub account and follow the directions to set up and run the server.
* In this repo:
  * Download npm by running `npm install -g npm`.
  * Run `mpn i` to install all dependencies from the `package.json` file.
  * Create a `.env.local` file with the following info:

  ```python
  NEXT_PUBLIC_API_URL=https://cookie-stand-api-lemon.vercel.app
  NEXT_PUBLIC_RESOURCE_URL=https://cookie-stand-api-lemon.vercel.app/api/v1/cookie_stands/
  ```

  * Run `npm run dev`.
  * Sign in to the login page using:
    * Username: `test`
    * Password: `uncommon`
  * You should be able to see the table of locations in the database and be able to create/delete locations.

OR

* Just go to the [deployed front-end](https://cookie-stand-admin-weld-delta.vercel.app/) and log in.

### Additional Setup Directions from Next.js Documentation

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
