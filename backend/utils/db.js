const mongoose = require("mongoose");

const connectToDb = async () => {
  const dbUri = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(dbUri);
    console.log(`MongDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectToDb;
