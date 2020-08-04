[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Job Search

## How to Run it locally:

!!!important!!! ng cli is using to execute some commands, so you should have it installed

1.  Clone repository to your machine with `git clone <repo_url>` and enter the newly created folder 

2.  Call `npm i` to install dependencies

3.  Call `npm run start:api` to start json-server fake API on port 3000

4.  Call `npm run start:app` to start application dev server

5. Navigate your web-browser to `localhost:4200`

6. ou can use npm run start:all will run both servers together

7. If problems with NODE-SASS accures (win), open admin terminal and run npm install --global windows-build-tools


## How to Test it locally:

1. Call `npm test` to start unit testing with <b>Karma</b> and <b>Jasmine</b>

2. Call `npm run start:coverage` to run http-server and see <b>test coverage</b> report

2. Call `npm run e2e` to run e2e tests with <b>Protractor</b> and <b>Cucumber</b>

### Based on Angular-Cli v7.0.3


