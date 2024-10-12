const connection = require('../config/db');

// Fetch all actor
exports.getActor = (req, res) => {
  const sql = 'SELECT * FROM actors';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
