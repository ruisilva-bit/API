require('dotenv').config();


async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

        const db_user = process.env.DB_USER;
        const db_pass = process.env.DB_PASSWORD; 
        const db_host = process.env.DB_HOST;
        const db_port = process.env.DB_PORT;
        const db_table = process.env.DB_TABLE;
        
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(`mysql://${db_user}:${db_pass}@${db_host}:${db_port}/${db_table}`);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect};