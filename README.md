This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Styles

```
<style jsx><style> estilos en componente
```
- puedes usarlo dentro del return del componente

```
<style jsx global><style>: estilos globales
```
* Puedes crear un archivo en la carpeta component"AppLayout" y usarlo como envoltura de todos los components.
* Otra lugar donde usar los estilos globales es en el "_app".

# getInitialProps
- función que puede ser "async" y se ejecuta en el servidor antes de rendering el componente.
- los datos retornados de esta función (pueden ser un fetch) se le pasan como props al componente .

```
NameComponent.getInitialProps=()=>{
  return fetch('http://localhost:3000/api/hello')
    .then(res=>res.json())
    .then(response=>{
      console.log(response)
      const {name} = response
      return {name}
    })
}
```