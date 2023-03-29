# Sample app with ts-rest

A sample app using [ts-rest](https://ts-rest.com/).

## Creating the environment

### Install the core package and Zod

```sh
npm install @ts-rest/core
npm install zod

npm install --save-dev typescript
tsc --init
```

Make sure that `strict` in `tsconfig.json` is `true` if you use the app with `zod`, otherwise you may face performance issues [#162](https://github.com/ts-rest/ts-rest/issues/162)

```sh
npm init @eslint/config

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · YAML
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · npm
```

```sh
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
```

```sh
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-import eslint-plugin-unused-imports
```

### Server implementation

```sh
npm install express
npm install cors
npm install --save-dev @types/express @types/cors
```

```sh
npm install @ts-rest/express
# or
npm install @ts-rest/nest
# or
npm install @ts-rest/next
```

### Client implementation

```sh
npm install @ts-rest/react-query
```
