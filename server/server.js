const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//connect DataBase
connectDB();
//init  Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}
//Define Routes
app.use('/api/students', require('./routes/api/students'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));


