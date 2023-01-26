<h1 align="center">Object Mother Example</h1>

<p align="center">
  Example of how we can use object mothers to improve testing strategy
</p>

<p align="center">
    <a href="https://github.com/AlbertHernandez/object-mother-example/actions/workflows/nodejs.yml?branch=main"><img src="https://github.com/AlbertHernandez/object-mother-example/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="nodejs"/></a>
</p>

## Table of Contents

- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)

## Preparing environment to contribute

This library has been designed to work with node v16 and npm 8. In order to configure your local environment you can run:

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
