/*eslint no-process-env:0*/

import _ from 'lodash';

// Development specific configuration
// ==================================
module.exports = _.merge(
    {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
            uri: process.env.MONGODB_URI || 'mongodb://mean-template-mongodb/mean-template-dev'
    },
    // Seed database on startup
        seedDB: true
    },
    require(`./local.js`) || {});
