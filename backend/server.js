const mongoose = require("mongoose");

global.mongoose = {
  conn: null,
  promise: null,
};

async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("Connected from previous");
    return global.mongoose.conn;
  } else {
    const connString = process.env.MONGODB_URI;

    const promise = mongoose.connect(connString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await promise,
      promise,
    };

    console.log("Newly Connected");

    return await promise;
  }
}

module.exports = dbConnect;
