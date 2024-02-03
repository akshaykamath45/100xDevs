//  Function to create user table in a database
import { Client } from 'pg'
 
const client = new Client({
    // host: 'practice-akshaykamath193-7673.a.aivencloud.com',
    // port:16794,
    // database: 'defaultdb',
    // user: 'avnadmin',
    // password: 'AVNS_DadUkmbwvbbAAW0ep9c',
    // connection_string: postgres:avnadmin:AVNS_DadUkmbwvbbAAW0ep9c@practice-akshaykamath193-7673.a.aivencloud.com:16794/defaultdb?sslmode=require
    connectionString: "postgresql://akshaykamath193:ULBHn5W4RPsq@ep-rough-firefly-66355830.us-east-2.aws.neon.tech/test?sslmode=require",

  })
  
  

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();

async function insertData() {
    try {
      await client.connect(); // Ensure client connection is established
      const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username3', 'user4@example.com', 'user_password');";
      const res = await client.query(insertQuery);
      console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await client.end(); // Close the client connection
    }
  }
// insertData();