const express = require('express');
const cors = require('cors');
require('dotenv').config();
const movieRoutes = require('./routes/movieRoutes');
const genreRoute = require('./routes/genreRoute');
const countryRoute = require('./routes/countryRoute');
const actorRoute = require('./routes/actorRoute');
const reviewRoute = require('./routes/reviewRoute');

const app = express();
app.use(cors());
app.use(express.json());

// Tambahkan rute movie dan genre
app.use('/api', movieRoutes);
app.use('/genre', genreRoute);  
app.use('/country', countryRoute);
app.use('/actor', actorRoute);
app.use('/review', reviewRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
