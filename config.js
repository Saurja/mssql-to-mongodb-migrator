module.exports = {
  sqlConnectionString:
    "", // Insert your connection string here.
  mongoConnectionString: "", // This puts the resulting database in MongoDB running on your local PC.
  targetDatabaseName: "", // Specify the MongoDB database where the data will end up.
  skip: [],
  remapKeys: false, // Set this to false if you want to leave table keys as they are, set to true to remap them to MongoDB ObjectId's.
};
