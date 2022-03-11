const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();
// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Api is running');
  });
}
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
