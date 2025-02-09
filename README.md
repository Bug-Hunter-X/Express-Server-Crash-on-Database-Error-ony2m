# Express Server Crash on Database Error

This repository demonstrates a common error in Express.js applications: a server crash due to unhandled errors during database queries.

The `bug.js` file shows an Express route that directly throws an error when a database query fails. This causes the entire server to crash.

The `bugSolution.js` file provides a solution by implementing proper error handling within the route handler to gracefully manage potential errors.

## How to reproduce

1. Clone the repository.
2. Install dependencies: `npm install express mysql2` (replace `mysql2` with your database driver). 
3.  Run `node bug.js`.  You'll see a crash. 
4.  Run `node bugSolution.js`. This version handles the error correctly.