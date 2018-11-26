[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Job Search

## How to Run it locally:

!!!important!!! ng cli is using to execute some commands, so you should have it installed

1.  Clone repository to your machine with `git clone <repo_url>` and enter the newly created folder 

2.  Call `yarn` to install dependencies

3.  Call `yarn start:api` to start json-server fake API on port 3000

4.  Call `yarn start:app` to start application dev server

5. Navigate your web-browser to `localhost:4200`

6. Enjoy

7. If its too complicated, `yarn start:all` will run both servers together

## How to Test it locally:

1. Call `yarn test` to start unit testing with <b>Karma</b> and <b>Jasmine</b>

2. Call `yarn start:coverage` to run http-server and see <b>test coverage</b> report

2. Call `yarn e2e` to run e2e tests with <b>Protractor</b> and <b>Cucumber</b>

### Based on Angular-Cli v7.0.3


