const rammerhead = require('rammerhead');
const path = require('path');

// Base directory for Rammerhead's config and storage
const baseDir = path.resolve(__dirname, "rammerhead_data");

// You can configure Rammerhead via a config file or via options here
rammerhead({
  basedir: baseDir,
  configname: "config.json", // Rammerhead will generate a default config if it doesn't exist
  // Optionally you can set the port here, but Codespaces will inject process.env.PORT
  port: process.env.PORT || 3000
});