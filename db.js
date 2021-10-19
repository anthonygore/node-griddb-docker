const griddb = require('griddb_node');

const connect = () => {
  const factory = griddb.StoreFactory.getInstance();
  return factory.getStore({
    "notificationMember": "griddb:10001",
    "clusterName": "defaultCluster",
    "username": "admin",
    "password": "admin"
  });
};

module.exports = { connect };
