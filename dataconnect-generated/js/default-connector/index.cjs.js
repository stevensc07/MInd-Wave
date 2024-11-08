const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Mind-Way-Landing',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

