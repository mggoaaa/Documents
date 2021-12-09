// This file is the index router intended to create all the api definition


const documentRouter = require("./documents.router");
 

const createAPIRouteDefintion = (app) => {
  //Routes
  app.use("/documents", documentRouter);
};

module.exports = { createAPIRouteDefintion };

