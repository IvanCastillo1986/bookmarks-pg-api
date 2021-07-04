// DEPENDENCIES
const pgp = require("pg-promise")()   // our postgres promise library which we just installed.
                                      // with initialization options: require("pg-promise")(initOptions)

require("dotenv").config()
// pgp()    // we can invoke pgp here, instead of adding the () to our second line

// an object to store db connection info
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

// After setting the object up, we can create a 'database' variable and assign it to the value of pgp(connection)
const db = pgp(cn)

// EXPORTS
module.exports = db



// This is our basic setup for the configuration.
// We've installed: npm install pg-promise.
// We have loaded and initialized the pg-promise library with const pgp = require("pg-promise")()
// Then, we've created our Database object from the connection as pgp(connection)
    // The 'connection' parameter is either a Configuration Object or a Connection String
console.log(cn)


// The next thing we need to do is set up queries for the database that correspond to the 
// server requests and endpoints in our API.