# Ledger

Simple ledger application built with Remix and Mongo Atlas deployed on Vercel.

- Live: https://ledger-eta.vercel.app/


## CI/CD

Automated by [Vercel Preview and Ship](https://vercel.com/docs/concepts/deployments/preview-deployments).

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).


## Development

```sh
git checkout master
npm install
npx prisma init --datasource-provider mongodb # if no prisma folder has been generated
touch .env # create a .env file
# add DATABASE_URL = "mongodb+srv://userName:password@mycluster.emeuyw6.mongodb.net/ledgerdev?retryWrites=true&w=majority" inside .env file
npx prisma generate
npm run dev
```

## Prisma Updates

After updating Prisma models, you will need to generate the Prisma models and apply to the Mongo DB.

```sh
npx prisma db push
```


Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

