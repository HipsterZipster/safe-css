# Add Sass Support to Create React App 2.0

> Created with CodeSandbox

[create-react-app version 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html) added a lot of new features. One of the new features is support for Sass. If you start to use Sass, create-react-app will give you an error, but will give detailed instructions on how you can add Sass support to your project.

Video: https://youtu.be/pFrGSxIH8rU

Source Code: https://codesandbox.io/s/github/khriztianmoreno/create-react-app2-sass

## How does it work?

Requires Node.JS ^8.11

- `npm install` to install the dependencies.
- `npm run start` for the development environment.

## License

MIT

```json
{
  "header": "_src_header_header_module__header",
  "header__cross": "_src_header_header_module__header__cross",
  "-updated": "_src_header_header_module__-updated",
  "flash": "_src_header_header_module__flash",
  "default": {
    "header": "_src_header_header_module__header",
    "header__cross": "_src_header_header_module__header__cross",
    "-updated": "_src_header_header_module__-updated",
    "flash": "_src_header_header_module__flash"
  }
}
```

```css
._src_header_header_module__header {
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  font-size: 3rem;
}
._src_header_header_module__header-cross {
  color: #abc;
  font-size: 2rem;
}
._src_header_header_module__header-cross._src_header_header_module__-updated {
  animation: _src_header_header_module__flash linear 1s infinite;
  color: #f2f;
}

@keyframes _src_header_header_module__flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
```
