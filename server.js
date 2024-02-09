const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/connection');
const shipRouter = require('./routes/shipRoutes');
const seedDatabase = require('./config/seedDirectory');
const userRouter = require('./routes/userRoutes');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

testConnection();
// seedDatabase();

app.use('/shipping',shipRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})