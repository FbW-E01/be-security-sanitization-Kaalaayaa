# Backend Security: add validation and sanitation

Examine at the provided API

- There are two endpoints
- There is one schema and model
- There is a frontend provided; open index.html with live server
- Edit index.html only if necessary

## Your tasks

Do these in order!

1. Setup the project
    - Make the mongoose connection work
    - Make sure the backend starts
    - Open the "frontend"
    - Both backend and frontend *should* work right away
2. Add validation and sanitation logic to the endpoint
    - Start very simple at first
        - At first just make it so that you are validating the "name" field (min length 3 characters)
    - Note that one of the fields is a telephone number
        - Think about and research telephone numbers
        - What kind of validation and sanitation would be good for this data?
3. Test
4. Briefly explain these files
    - package.json
    The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

    - .env.example
    env.example file is included in the repository – it is used as an example file for you to know what KEY=VALUE pairs you need for your project. Most often it is used to copy it to .env file and then change the values.

    - .gitignore
    . gitignore tells git which files (or patterns) it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc

    - database.js
    this file here contains a function that connect to the database with mongoose. It uses a connection string with information from the .env files and and log the different connection status.

    - errorController.js
    this file contains a middleware function with an endpoint use to catch general errors
    
5. **BONUS** Make it so that the email is saved too!


























🐻