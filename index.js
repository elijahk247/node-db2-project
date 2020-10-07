const server = require('./api/server.js');
const helmet = require('helmet');
server.use(helmet());

// making port dynamic if deployed on heroku
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API running on port ${port}`));