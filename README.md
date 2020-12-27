## Nomad team's shared eslint config

Based on airbnb config

Plugins enabled:

- airbnb
- import
- react/jsx
- unicorn

## Install

1) ```npm install --save-dev @nomadinteractive/eslint-config```

2) Create .eslintrc file in your project root with following content:

```
{
    "extends": "@nomadinteractive"
}
```

3) Then add eslint script in your package.json scripts:

```
scripts": {
	"eslint": "eslint ./example-app"
},
```

## Usage

Run ```npm run eslint``` to check your code agains eslint.

## License

[MIT](LICENSE.md)
