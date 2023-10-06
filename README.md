# Project Name

## Table of Contents

1. [Description](#description)
2. [Understand the Infrastructure](#understand-the-infrastructure)
3. [Download the Code](#download-the-code)
4. [Contributing](#contributing)

<a name="description"></a>

## Description ℹ️

This project is a template for `<insert project description here>`. Feel free to edit this section to describe the main purpose and features of your project.

<a name="understand-the-infrastructure"></a>

## Understand the Infrastructure 🏗️

The project is built using Next.js and many other Node libraries help us give functionality. The system consists of the following main components:

1. **Next.js**: Framework for building React websites.
2. **GitHub**: Version control system for the project.

The libraries used in production are the following:

| **Library**                         | **Description**                                |
| ----------------------------------- | ---------------------------------------------- |
| `@headlessui/react`                 | UI components without styles for React         |
| `@heroicons/react`                  | Set of SVG icons for React apps                |
| `react-gtm-module`                  | Google Tag Manager module for React            |
| `react-icons`                       | Icon library for React                         |

The libraries used in development are the following:

| **Library**                | **Description**                                                                  |
| -------------------------- | -------------------------------------------------------------------------------- |
| `@next/eslint-plugin-next` | ESLint plugin for Next.js                                                        |
| `autoprefixer`             | PostCSS plugin to parse CSS and add vendor prefixes                              |
| `eslint`                   | Tool for identifying and reporting on patterns in JavaScript (uses many plugins) |
| `husky`                    | Git hooks made easy                                                              |
| `lint-staged`              | Run linters against staged git files                                             |
| `postcss`                  | Tool for transforming CSS with JavaScript (used by Tailwind CSS)                 |
| `prettier`                 | Opinionated code formatter                                                       |
| `tailwindcss`              | Utility-first CSS framework for styling                                          |

<a name="download-the-code"></a>

## Download the Code ⬇️

This project uses NextJS with npm for development. To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/<your-username>/<repository-name>.git`
2. Navigate to the project directory: `cd <repository-name>`
3. Install the dependencies: `npm install`
4. Install initialize husky: `npm run prepare`
5. Run the development server: `npm run dev`
6. Open your browser and navigate to `http://localhost:3000` to view the project.

<a name="contributing"></a>

## Contributing 💻

We appreciate your interest in contributing to the project. To contribute code without forking the repository, follow these best practices:

1. **Clone the repository**: Clone the repository to your local machine using `git clone https://github.com/synapzi/<repository-name>.git`.
2. **Create a new branch**: Navigate to the project directory and create a new branch using `git checkout -b <branch-name>`. Use a descriptive name for your branch, such as `feature/your-feature` or `bugfix/your-bugfix`.
3. **Make your changes**: Modify the code as necessary to implement your feature or fix a bug. Ensure your changes are well-documented and tested.
4. **Commit your changes**: Stage and commit your changes using `git add .` and `git commit -m "Your commit message"`. Use a clear and concise commit message that explains the purpose of your changes.
5. **Push your changes**: Push your changes to the repository using `git push origin <branch-name>`.
6. **Create a pull request**: Navigate to the original repository on GitHub and click the "New pull request" button. Select the branch you created, then click "Create pull request". Fill out the pull request template with a description of your changes, and submit it.

Please note that it may take some time for the maintainers to review your pull request. Your patience and cooperation are appreciated!
