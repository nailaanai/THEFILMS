const connection = require('../config/db');

// Fetch all actor
exports.getReview = (req, res) => {
  const sql = 'SELECT * FROM reviews';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Insert new review
exports.addReview = (req, res) => {
  const { movieId, user, rating, text } = req.body;
  
  // Sesuaikan jumlah kolom dengan yang ada di tabel Anda
  const sql = `INSERT INTO reviews (movie_id, author, rating, content) VALUES (?, ?, ?, ?)`;

  // Menjalankan query dengan nilai yang sesuai
  connection.query(sql, [movieId, user, rating, text], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Review added successfully' });
  });
};