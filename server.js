const dotenv = require('dotenv');
const db = require('./src/config/db.config');

dotenv.config({ path: '.env' });

// connect db sequelize


const app = require('./app');

const port = process.env.PORT;

db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
