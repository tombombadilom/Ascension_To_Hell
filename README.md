# Ascension_To_Hell

## Installation

To install the dependencies for this project, run:

```bash
pnpm install
```

## Building

To build the project, run:

```bash
pnpm build
```

## `package.json` and Scripts
The `package.json` file contains all the metadata necessary for your project to be installed and run.

Here are some custom scripts defined in the `scripts` object:

- `dev` - Starts the development server using Vite.
- `build` - Compiles the TypeScript files and creates a production build with Vite.
- `lint` - Runs ESLint to check for linting issues in `.ts` and `.tsx` files, without allowing any warnings.
- `fix:lint` - Runs ESLint and automatically fixes problems.
- `type` - Generates a TypeScript coverage report.
- `prettier` - Checks if your files are formatted.
- `prettier:fix` - Formats your files using Prettier.
- `watch` - Runs the TypeScript compiler in watch mode.
## Dockerfile Usage

The included `Dockerfile` defines the environment in which your project can be run inside a Docker container. To use it, simply build the image with:

```bash
docker build -t Ascension_To_Hell .
```

And then you can run your application in a container using:

```bash
docker run --rm -p 3000:3000 Ascension_To_Hell
```

Replace `3000:3000` with the appropriate port mapping for your application.

## docker-compose Usage

To simplify the management of Docker containers, a `docker-compose.yml` file is used. This file defines the services, networks, and volumes that compose your application.

To start the application with docker-compose, run:

```bash
docker-compose up
```

This will start all the services defined in your `docker-compose.yml` file in the foreground.

For more information on how to use `docker-compose`, visit [Docker Compose Documentation](https://docs.docker.com/compose/).
# Ascension_To_Hell
# Ascension_To_Hell
