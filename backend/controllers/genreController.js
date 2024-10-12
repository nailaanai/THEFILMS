const connection = require('../config/db');

// Fetch all genres
exports.getGenre = (req, res) => {
  const sql = 'SELECT * FROM genres';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
