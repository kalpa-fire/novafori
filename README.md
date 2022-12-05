# NovaFori technical test

This repo contains my solution to the NovaFori technical test. I spent around 4 hours on the challenge. As instructed by Alex, I have done only the frontend part of the task. 


## Scripts

To run the app in a dev environment, install the dependencies with `npm install` and run the following command:

```bash
npm run dev
```

Alternatively, you can build and start the app with the following commands

```bash
npm run build
npm run start
```

This application was created following a test-driven approach. The command to run the tests is

```bash
npm test
```

## Questions 

- What technical and functional assumptions did you make when implementing
your solution?

Being a frontend application, this assumes there will be no need to persist todo items on refresh. If that was a requirement, I would either use local/session storage or create a fully-fledged application with a backend and a database

- Briefly explain your technical design and why do you think is the best
approach to this problem.

I attempted to follow a test-driven approach in completing this challenge -- I wouldn't go so far as to call it the best approach, but in my experience it tends to produce software that is cleaner and easier to maintain.

In terms of technical design, I've decided to have a stateful ToDoList component and break parts of the UI logic into two stateless subcomponents for better readability and maintainability. 

I prioritised accessibility and functionality over design in this task. There is some basic styling using both a global stylesheet (still with a couple of Next defaults) and scoped CSS modules for the components.
