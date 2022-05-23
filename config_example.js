var config = {};

// Change user_name and password to DB user and pass.
// Change config_example.js to config.js
config.user_name = process.env.TWITTER_USER || 'example_username';
config.password=  process.env.TWITTER_PASSWORD || 'example_password';

// Change module.exports to = config.
module.exports = config_example;
