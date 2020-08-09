"use strict";

exports.kienmax = (event, context, callback) => {
  console.log("kienmax invoked");
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      name: "Kien Max",
      description: "Hello from Kien Max",
    }),
  };
  callback(null, response);
  console.log("after callback");
};
