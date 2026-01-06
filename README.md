# tapptitude.com strapi

Table of Contents
=================

- [tapptitude.com strapi](#tapptitudecom-strapi)
- [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [Running the app](#running-the-app)
  - [Branching](#branching)
  - [Commits](#commits)
    - [`<type>`](#type)
    - [`<optional scope>`](#optional-scope)
  - [Pull requests](#pull-requests)
  - [📚 Learn more](#-learn-more)

## Setup

- Use a node version >= 16
- Install the dependencies: `npm install`
- Configure `.env` from `.env.example` (ask other dev colleagues for keys)
- Configure a local postgresql instance to use. Recommended steps
  - Install [Docker desktop](https://www.docker.com/products/docker-desktop/)
  - Open docker desktop, search on the top search bar for `postgres` and `Pull` the official image
  - ![Pull docker image](docs/docker-image-pull.png)
  - Run the docker image with by clicking the > icon in the `Images` tab with the following configuration
  - ![Run docker image](docs/docker-image-run.png)
  - For the first usage you'll probably need to create the database as strapi might throw an error if it's not created (you can use any tool you like, we'll exemplify with DBeaver next)
    - To create the database directly from docker desktop, go to the created container, "exec" tab, and run:
    ```sh
    psql -h localhost -p 5432 -U postgres
    create database tapptitude_website_local;
    ```
- (optional) Configure DBeaver to access the database
  - Download and install [DBeaver Community](https://dbeaver.io/download/)
  - Open DBeaver and configure a new PostgreSQL connection
  - ![Configure connection](docs/dbeaver-config.png)
  - Create a new database with the name `tapptitude-website-local`
  - ![Create DB](docs/dbeaver-create-db.png)
- Upon running the strapi app for the first time you will be asked to create a new super admin account. This will be used only locally, put anything you want here.
- It's a good idea to pull the existing data from the staging instance so you have test data to work with. For this you need to set-up the `STAGING_TRANSFER_TOKEN` env variable.
  - You need to be on the same branch / commit as staging is deployed to
  - Run `npm run pull:staging`
- In the future, if you want to sync your local database to push the content to staging you can run `npm run transfer:staging`.

## Running the app

- Start the docker container for postgres
- ![Start docker container](docs/docker-container-start.png)
- `npm run dev`
- Open `http://localhost:1337/admin`

## Branching

Keep branches as small as possible for fast iteration and PR reviewing. Create branches using the following standard:

`<type>/<ticket-number>-<description>` - If no ticket number is available omit it and put the page name or something that represents the main feature

Follow the types from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Examples:

- feat/our-work-projects
- fix/about-us-person-field-names
- build/configure-aws
- chore/update-strapi-4.12

## Commits

Follow the guidelines from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

All the commit messages should have 3 main things: header, body and footer, separated by 1 blank line, like this:

```
<type>(<optional scope>): <subject>
// Empty space
<optional body>
// Empty space
<optional footer>
```

### `<type>`

The `<type>` tells us what the commit does and it may contain:

- `feat` - short for feature, meaning adding a new feature to the project.
- `build` - commits regarding the build. e.g.:
- `fix` - this commit represents a fix to a bug
- `test` - everything regarding testing
- `docs` - updating docs, README’s etc.
- `ci` - commits regarding the CI/CD
- `revert`
- `perf`
- `refactor`
- `style`
- `chore`

### `<optional scope>`

It contains a reference to the issue/ticket/bug this commit is about.

e.g. `feat(TAPP-2231): <subject>`

<subject>

The subject will define what this commit is about, in a maximum of 50 (or 72, tbd) characters. TL;DR: It’s a summary.

The message will be written in imperative, lowercase with no end-punctuation

e.g.:

- ✅ feat(TAPP-2231): update git rules
- ❌ feat(TAPP-2231): updated git rules
- ❌ feat(TAPP-2231): update git rules.
- ❌ feat(TAPP-2231): Update git rules

We use UPPERCASE for the ticket’s numbers - it has direct integration with JIRA/GitHub (the ticket will be recognised)

Examples:

- feat(our-work): add testimonial rating
- feat(our-work): add longDescription and logo to project
- feat(general): add import export plugin
- ci: add bitbucket pipeline
- build: add nginx config

## Pull requests

- When creating a pull request add each dev member as a reviewer.
- Ideally we want to have only one commit per branch to keep the history light and readable. For this, you can use the following flow:
  - Create the branch from `staging`
  - Work normally with as many commits as you want
  - When the branch is ready for PR, sync with staging by running `git pull origin staging`
  - When merging the pr make sure to select "Squash merge" - that way it will only put one commit into staging and not the whole history.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.
