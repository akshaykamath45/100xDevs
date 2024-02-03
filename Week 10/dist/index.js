"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//  Function to create user table in a database
const pg_1 = require("pg");
const client = new pg_1.Client({
    // host: 'practice-akshaykamath193-7673.a.aivencloud.com',
    // port:16794,
    // database: 'defaultdb',
    // user: 'avnadmin',
    // password: 'AVNS_DadUkmbwvbbAAW0ep9c',
    // connection_string: postgres:avnadmin:AVNS_DadUkmbwvbbAAW0ep9c@practice-akshaykamath193-7673.a.aivencloud.com:16794/defaultdb?sslmode=require
    connectionString: "postgresql://akshaykamath193:ULBHn5W4RPsq@ep-rough-firefly-66355830.us-east-2.aws.neon.tech/test?sslmode=require",
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// createUsersTable();
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username3', 'user4@example.com', 'user_password');";
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData();
